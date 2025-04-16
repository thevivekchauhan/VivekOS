import React, { useState, useEffect, useRef } from 'react';
import { IconButton, TextField, Spinner, MessageBar, MessageBarType } from '@fluentui/react';
import { Send } from '@fluentui/react-icons';
import './cortana.css';

function Cortana() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I\'m VivekAI. How can I help you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;
        
        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.REACT_APP_OPENAI_API_KEY,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: "claude-2",
                    max_tokens: 500,
                    messages: [{
                        role: "user",
                        content: input
                    }]
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
            }

            const data = await response.json();
            if (data.content) {
                const assistantMessage = {
                    role: 'assistant',
                    content: data.content[0].text
                };
                setMessages(prev => [...prev, assistantMessage]);
            } else {
                throw new Error('Unexpected API response format');
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'Sorry, I encountered an error. Please check your API key and try again.' 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="cortana-container">
            <div className="cortana-header">
                <h2>Your Virtual Assistant</h2>
            </div>
            
            {error && (
                <MessageBar
                    messageBarType={MessageBarType.error}
                    onDismiss={() => setError(null)}
                    dismissButtonAriaLabel="Close"
                >
                    {error}
                </MessageBar>
            )}
            
            <div className="cortana-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        <div className="message-content">
                            {msg.content.split('\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="message assistant">
                        <Spinner label="Thinking..." labelPosition="right" />
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            
            <div className="cortana-input">
                <TextField
                    value={input}
                    onChange={(e, newValue) => setInput(newValue)}
                    placeholder="Ask me anything..."
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
                    multiline
                    autoAdjustHeight
                    resizable={false}
                    disabled={isLoading}
                />
                <IconButton
                    iconProps={{ iconName: "Send" }}
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    styles={{
                        root: { 
                            height: 'auto',
                            marginLeft: '8px'
                        },
                        icon: { 
                            fontSize: '16px' 
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Cortana;