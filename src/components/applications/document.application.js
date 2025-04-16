// import React from "react";
// import { useQuill } from "react-quilljs";
// import "quill/dist/quill.snow.css";

// function Word() {
// 	const { quillRef } = useQuill();

// 	return (
// 		<div className="height-100 uk-background-muted">
// 			<div ref={quillRef} />
// 		</div>
// 	);
// }

// export default Word;



import React, { useEffect, useState } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { Button, Card, Container, ListGroup, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Word() {
  const { quill, quillRef } = useQuill();
  const [documents, setDocuments] = useState([]);
  const [documentName, setDocumentName] = useState("");
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState(null);

  // Load saved documents on component mount
  useEffect(() => {
    const savedDocs = JSON.parse(localStorage.getItem("wordDocuments")) || [];
    setDocuments(savedDocs);
  }, []);

  // Set up Quill editor
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        // Handle text changes if needed
      });
    }
  }, [quill]);

  const handleSave = () => {
    if (!documentName.trim()) {
      alert("Please enter a document name");
      return;
    }

    const content = quill.root.innerHTML;
    const newDocument = {
      id: Date.now(),
      name: documentName,
      content,
      createdAt: new Date().toISOString(),
    };

    const updatedDocuments = [...documents, newDocument];
    setDocuments(updatedDocuments);
    localStorage.setItem("wordDocuments", JSON.stringify(updatedDocuments));
    
    setDocumentName("");
    setShowSaveModal(false);
    
    // For actual desktop saving, we'd need Electron or similar framework
    // This is a browser-only solution
  };

  const handleOpenDocument = (doc) => {
    quill.clipboard.dangerouslyPasteHTML(doc.content);
  };

  const confirmDelete = (doc) => {
    setDocumentToDelete(doc);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    const updatedDocuments = documents.filter(doc => doc.id !== documentToDelete.id);
    setDocuments(updatedDocuments);
    localStorage.setItem("wordDocuments", JSON.stringify(updatedDocuments));
    setShowDeleteModal(false);
  };

  const downloadDocument = (doc) => {
    const blob = new Blob([doc.content], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${doc.name}.doc.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Container fluid className="mt-3">
      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={() => setShowSaveModal(true)}>
          Save Document
        </Button>
      </div>

      <div className="row">
        <div className="col-md-3">
          <Card>
            <Card.Header>Saved Documents</Card.Header>
            <ListGroup variant="flush">
              {documents.map((doc) => (
                <ListGroup.Item key={doc.id}>
                  <div className="d-flex justify-content-between align-items-center">
                    <span 
                      style={{ cursor: "pointer" }} 
                      onClick={() => handleOpenDocument(doc)}
                    >
                      {doc.name}
                    </span>
                    <div>
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          confirmDelete(doc);
                        }}
                        className="me-1"
                      >
                        Delete
                      </Button>
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadDocument(doc);
                        }}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
        <div className="col-md-9">
          <div ref={quillRef} style={{ height: "80vh" }} />
        </div>
      </div>

      {/* Save Modal */}
      <Modal show={showSaveModal} onHide={() => setShowSaveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Save Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="documentName" className="form-label">
              Document Name
            </label>
            <input
              type="text"
              className="form-control"
              id="documentName"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowSaveModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete "{documentToDelete?.name}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Word;