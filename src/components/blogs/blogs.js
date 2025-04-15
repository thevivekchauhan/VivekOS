import React, { useState } from "react";
import avatar from "../../assets/images/baseImages/default_avatar.svg";
import user from "../../utils/data/user.config";
import "../blogs/windows-theme.css";
import blog1 from "../../assets/images/apps/travelvlog.png";
import blog2 from "../../assets/images/apps/travelvlog.png";

function Blogs() {
  // Sample blog data with categories
  const blogPosts = [
    {
      id: 1,
      title: "My Travel Adventure",
      date: "April 15, 2023",
      image: blog1,
      content: "This is a sample travel blog post with an image. The Windows theme gives it a familiar desktop application feel.",
      category: "Travel",
      excerpt: "Exploring the mountains of Nepal..."
    },
    {
      id: 2,
      title: "React Hooks Explained",
      date: "March 28, 2023",
      image: blog2,
      content: "Another example of a technology blog post in our Windows-themed layout.",
      category: "Technology",
      excerpt: "Understanding useState and useEffect..."
    },
    {
      id: 3,
      title: "Startup Success Tips",
      date: "February 10, 2023",
      image: blog1,
      content: "Essential tips for building a successful startup in today's competitive market.",
      category: "Business",
      excerpt: "How to validate your business idea..."
    },
    {
      id: 4,
      title: "JavaScript Best Practices",
      date: "January 22, 2023",
      image: blog2,
      content: "Learn the modern JavaScript practices every developer should know.",
      category: "Coders",
      excerpt: "Clean code principles for JavaScript..."
    },
    {
      id: 5,
      title: "Electric Cars Revolution",
      date: "December 5, 2022",
      image: blog1,
      content: "How electric vehicles are changing the automotive industry.",
      category: "Cars",
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
        <div className="window-controls">
          <span className="window-control minimize"></span>
          <span className="window-control maximize"></span>
          <span className="window-control close"></span>
        </div>
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

        {/* User description */}
        {user.aboutMe.description && (
          <div className="user-description">
            {user.aboutMe.description}
          </div>
        )}

        {user.aboutMe.outro && (
          <div className="user-outro">
            {user.aboutMe.outro}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blogs;