import React, { useState, useMemo } from "react";
import ImageCard from "./ImageCard";
import AddModal from "./AddModal";
import initialImages from "../data/images";
import "./Gallery.css";

const ALL_CATEGORIES = ["All", "Nature", "Architecture", "Animals", "Travel"];

function Gallery() {
  const [images, setImages] = useState(initialImages);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  // Filter images based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  const handleAddImage = (newImage) => {
    setImages((prev) => [newImage, ...prev]);
  };

  return (
    <>
      <div className="gallery-root">
        {/* Header */}
        <div className="gallery-header">
          <div className="gallery-header-left">
            <h1 className="gallery-title">Image Gallery</h1>
            <span className="gallery-badge">{filteredImages.length} photos</span>
          </div>
          <button className="add-btn" onClick={() => setShowModal(true)}>
            + Add Image
          </button>
        </div>

        {/* Category Filter */}
        <div className="filter-row">
          {ALL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        {filteredImages.length === 0 ? (
          <p className="empty-msg">No images in this category yet.</p>
        ) : (
          <div className="gallery-grid">
            {filteredImages.map((img) => (
              <ImageCard key={img.id} image={img} />
            ))}
          </div>
        )}
      </div>

      {/* Add Image Modal */}
      {showModal && (
        <AddModal
          onClose={() => setShowModal(false)}
          onSave={handleAddImage}
        />
      )}
    </>
  );
}

export default Gallery;
