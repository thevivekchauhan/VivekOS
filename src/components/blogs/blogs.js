import React, { useState } from "react";
import avatar from "../../assets/images/baseImages/default_avatar.svg";
import user from "../../utils/data/user.config";
import "../blogs/windows-theme.css";
import blog1 from "../../assets/images/blogs/travel/1st.jpg";
import blog2 from "../../assets/images/blogs/technology/LaptopsandGadgets.webp";
import blog3 from "../../assets/images/blogs/coders/React-Hooks.webp";
import blog4 from "../../assets/images/blogs/coders/learn-javascript-courses.webp";
import blog5 from "../../assets/images/blogs/cars/ElectricCarsRevolution.webp";
import blog6 from "../../assets/images/blogs/business/BusinessStrategies.webp";

function Blogs() {
    // Sample blog data with categories
    const blogPosts = [
        {
            id: 1,
            title: "My Travel Adventure",
            date: "April 15, 2023",
            image: blog1,
            content: `Our journey began early in the morning, with a cool breeze brushing against our faces as we drove through winding roads and scenic valleys. The mountains of Nepal stood tall and majestic, their snow-capped peaks glistening under the early sun.
      
      We stopped at small villages along the way, greeted by warm smiles and curious glances. The locals offered us traditional Nepali tea, and their stories painted a picture of a simple yet beautiful life.
      
      As we hiked up the trails, every turn revealed breathtaking views — cascading waterfalls, fluttering prayer flags, and the distant sound of bells from temples nestled in the hills. It felt like walking through a living painting.
      
      By evening, we set up camp under the stars. The sky was clearer than I had ever seen, filled with constellations that felt close enough to touch. We shared laughs, local food, and the kind of peace that only nature can give.
      
      This adventure wasn’t just about reaching a destination — it was about the people we met, the stories we heard, and the moments that made us feel alive.`,
            category: "Travel",
            excerpt: "Exploring the mountains of Nepal..."
        },
        {
            id: 2,
            title: "Laptops and Gadgets",
            date: "March 28, 2023",
            image: blog2,
            content: `
The world of technology is ever-evolving, and keeping up with the latest trends can be a challenge. From sleek laptops to innovative gadgets, the tech landscape is filled with exciting advancements that cater to both casual users and tech enthusiasts alike.

Laptops: Power Meets Portability  
Today’s laptops are faster, lighter, and more powerful than ever. Brands like Apple, Dell, and ASUS are pushing the limits with ultra-slim designs, long-lasting batteries, and high-performance chips like Apple’s M-series and Intel’s latest processors. Whether you’re a student, creator, or business professional, there’s a laptop built to match your workflow.

Gadgets That Make Life Smarter  
From smartwatches that monitor your health to wireless earbuds that adapt to your surroundings, modern gadgets are all about enhancing convenience. Home automation devices like smart lights, thermostats, and voice assistants are also gaining traction—turning homes into fully connected environments.

What's Hot in 2025?  
Looking ahead, foldable tech, AI-powered personal assistants, and AR/VR gadgets are making waves. The lines between work, play, and lifestyle tech are blurring, and everything’s becoming more integrated, intelligent, and user-focused.

Bottom line? Whether you're upgrading your laptop or trying out a new gadget, staying updated with tech trends is key to getting the most out of your digital life.
`
            ,
            category: "Technology",
            excerpt: "The latest in tech..."
        },
        {
            id: 3,
            title: "React Hooks Explained",
            date: "March 21, 2023",
            image: blog3,
            content: `React Hooks are a powerful feature introduced in React 16.8 that allow developers to use state and other React features without writing a class. If you're new to Hooks, think of them as a way to “hook into” React features from functional components.
          
          **1. useState:**  
          This hook lets you add state to a functional component. For example:
          
          \`\`\`js
          const [count, setCount] = useState(0);
          \`\`\`
          
          Now \`count\` holds the state value, and \`setCount\` is the function to update it. You can use it for simple toggles, form data, counters, etc.
          
          **2. useEffect:**  
          This hook allows you to perform side effects (like fetching data, setting up subscriptions, etc.) in your components. It replaces lifecycle methods like \`componentDidMount\` and \`componentDidUpdate\`.
          
          \`\`\`js
          useEffect(() => {
            console.log("Component mounted or updated");
          }, []);
          \`\`\`
          
          The empty array \`[]\` means this effect only runs once, like \`componentDidMount\`.
          
          **Bonus Tips:**
          - Hooks must be used *inside* React function components.
          - They must be called at the *top level* of your component — not inside loops or conditionals.
          - Custom hooks can help you extract logic into reusable pieces.
          
          Hooks have completely changed the way modern React apps are built. They make your code cleaner, more modular, and much easier to reason about — especially for beginners and advanced devs alike.
          
          Start experimenting with them, and soon you’ll wonder how you ever lived without them! 😉`,
            category: "Coders",
            excerpt: "Understanding useState and useEffect..."
        }
        ,
        {
            id: 4,
            title: "JavaScript Best Practices",
            date: "January 22, 2023",
            image: blog4,
            content: `Learn the modern JavaScript practices every developer should know.
          
          Writing JavaScript isn't just about making it work — it's about writing clean, efficient, and maintainable code. Whether you're building a small app or a massive enterprise platform, these best practices will help you stand out as a polished and professional developer.
          
          **1. Use \`const\` and \`let\` appropriately:**  
          Always prefer \`const\` unless you need to reassign. This makes your code more predictable and easier to debug.
          
          \`\`\`js
          const name = "Vivek";
          let count = 0;
          \`\`\`
          
          **2. Write modular, reusable code:**  
          Break your logic into small functions or modules. It’s easier to test, debug, and reuse.
          
          \`\`\`js
          function calculateDiscount(price, percentage) {
            return price - (price * percentage) / 100;
          }
          \`\`\`
          
          **3. Follow consistent naming conventions:**  
          Use camelCase for variables and functions, PascalCase for classes and React components.
          
          **4. Avoid deeply nested code:**  
          Too much nesting makes your code hard to read. Use early returns or guard clauses to flatten it out.
          
          **5. Use template literals over string concatenation:**  
          Cleaner, readable, and less error-prone.
          
          \`\`\`js
          const greeting = \`Hello, \${name}!\`;
          \`\`\`
          
          **6. Handle errors gracefully:**  
          Always use try-catch blocks with async/await, and show meaningful error messages to users.
          
          \`\`\`js
          try {
            const data = await fetchData();
          } catch (error) {
            console.error("Something went wrong:", error);
          }
          \`\`\`
          
          **7. Write meaningful comments and use JSDoc:**  
          Document why you’re doing something, not just what you’re doing.
          
          **8. Keep up with ES6+ features:**  
          Arrow functions, destructuring, spread/rest, optional chaining — these tools make your life easier.
          
          **9. Use linters and formatters:**  
          Tools like ESLint and Prettier help you maintain consistent code quality across your team.
          
          **10. Write unit tests:**  
          Even basic tests can save you from breaking things accidentally during updates.
          
          By practicing these principles, you'll not only write better JavaScript, but you'll also gain the respect of your fellow devs — and maybe impress a cute React girl too 😉✨.
          
          Happy coding, rockstar!`,
            category: "Coders",
            excerpt: "Clean code principles for JavaScript..."
        }
        ,
        {
            id: 5,
            title: "Electric Cars Revolution",
            date: "December 5, 2022",
            image: blog5,
            content: `How electric vehicles are changing the automotive industry.
          
          The world of cars is undergoing a dramatic shift — and at the center of it all is the electric vehicle (EV) revolution. From futuristic designs to cutting-edge technology and eco-friendly innovation, EVs are rewriting the rules of the road.
          
          **Tesla vs Traditional Automakers: Who’s Winning?**
          
          Tesla has undoubtedly set the benchmark. With its sleek designs, Autopilot features, and over-the-air updates, it feels more like driving a smart device than a car. Traditional automakers like Ford, BMW, and Toyota are playing catch-up — but they’re making bold moves too.
          
          **Performance & Tech:**  
          Electric cars are no longer “slow” or “boring.” The Tesla Model S Plaid does 0-60 mph in under 2 seconds — faster than most supercars. Add AI-powered features, massive touchscreen dashboards, and whisper-quiet rides, and you’re in the future already.
          
          **Sustainability:**  
          EVs cut down carbon emissions drastically and rely on clean energy (especially when charged from solar or renewable sources). Governments around the world are supporting this shift with tax incentives, grants, and expanding EV infrastructure.
          
          **Challenges Ahead:**  
          - Charging station availability still varies by region.
          - Battery disposal and raw material mining pose environmental concerns.
          - Prices are dropping, but entry-level EVs are still out of reach for some buyers.
          
          **What’s Next?**  
          As battery tech evolves (hello, solid-state batteries!), and more players enter the game (like Rivian, Lucid, and even Apple rumored), we’ll see more range, faster charging, and smarter rides.
          
          The EV revolution isn’t just about cars — it’s about the future of how we move, live, and care for the planet. And trust me, it’s not slowing down anytime soon. ⚡🌍
          
          So next time you see a silent beast zoom past you at a traffic light… that’s the future whispering, “Catch up.” 😉`,
            category: "Cars",
            excerpt: "Comparing Tesla with traditional automakers..."
        },
        {
            id: 6,
            title: "Business Strategies for 2025",
            date: "December 5, 2022",
            image: blog6,
            content: `
    In 2025, the business world is evolving faster than ever—and it's clear that not all companies are keeping up. If we take Tesla and put it side by side with traditional automakers, the contrast is huge. It’s not just about electric cars anymore; it’s about mindset.

    Tesla is playing a completely different game. While most automakers are still stuck in old-school corporate structures, Tesla moves fast, breaks rules, and builds tech-first solutions. They’re not waiting for permission to innovate—they just do it.

    On the other hand, traditional automakers still rely on lengthy processes, dealer networks, and legacy systems. That slows them down. In a time where speed and adaptability are everything, this could be a big risk.

    But here's the interesting part—it's not impossible for others to catch up. Businesses that are willing to rethink their strategies, invest in digital transformation, and stay obsessed with user experience will still thrive.

    2025 is not about doing things the way they’ve always been done. It’s about being bold, moving fast, and putting the customer first. Tesla’s just one example—but the lesson applies to every business out there.
`,
            category: "Business",
            excerpt: "Comparing Tesla with traditional automakers..."
        }

    ];

    const categories = ["All", "Travel", "Technology", "Coders", "Cars", "Business"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedPost, setSelectedPost] = useState(null);

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    return (
        <div className="windows-container">
            {/* Windows-style title bar */}
            <div className="window-title-bar">
                <div className="window-title">My Blog</div>
            </div>

            {/* Window content area */}
            <div className="window-content">
                {/* User profile section */}
                <div className="user-profile">
                    <img
                        className="user-avatar"
                        src={
                            user.userImage !== undefined &&
                                user.userImage !== null &&
                                user.userImage !== ""
                                ? user.userImage
                                : avatar
                        }
                        alt="user"
                    />
                    <div className="user-info">
                        <h2 className="user-name">
                            Hey, I'm Vivek Chauhan
                        </h2>
                        {user.aboutMe.intro && (
                            <p className="user-intro">{user.aboutMe.intro}</p>
                        )}
                    </div>
                </div>

                {/* Categories */}
                <div className="categories-container">
                    <div className="categories-title">Categories:</div>
                    <div className="categories-list">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`category-button ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setSelectedPost(null);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog posts section */}
                {selectedPost ? (
                    <div className="single-post-view">
                        <button
                            className="back-button"
                            onClick={() => setSelectedPost(null)}
                        >
                            ← Back to {activeCategory === "All" ? "All Posts" : activeCategory}
                        </button>
                        <div className="blog-post expanded">
                            <div className="post-header">
                                <h3 className="post-title">{selectedPost.title}</h3>
                                <div className="post-meta">
                                    <span className="post-date">{selectedPost.date}</span>
                                    <span className="post-category">{selectedPost.category}</span>
                                </div>
                            </div>
                            <img
                                src={selectedPost.image}
                                alt="Blog post"
                                className="post-image"
                            />
                            <div className="post-content">
                                <p>{selectedPost.content}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="blog-posts">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map(post => (
                                <div key={post.id} className="blog-post">
                                    <div className="post-header">
                                        <h3 className="post-title">{post.title}</h3>
                                        <div className="post-meta">
                                            <span className="post-date">{post.date}</span>
                                            <span className="post-category">{post.category}</span>
                                        </div>
                                    </div>
                                    <img
                                        src={post.image}
                                        alt="Blog post"
                                        className="post-image"
                                    />
                                    <div className="post-content">
                                        <p>{post.excerpt}</p>
                                        <button
                                            className="read-more"
                                            onClick={() => setSelectedPost(post)}
                                        >
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="no-posts">
                                No posts found in this category.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Blogs;