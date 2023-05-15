import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from "axios";

function HousePhotos(props) {
  const [photos, setPhotos] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    // Fetch photos from Google Drive folder
    fetchPhotosFromFolder(props.folderId);
  }, [props.folderId]);

  const fetchPhotosFromFolder = async (folderId) => {
    try {
      const photosArray = await getPhotosArrayFromFolder(folderId);
      setPhotos(photosArray);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const getPhotosArrayFromFolder = async (folderId) => {
    // Use Axios to make the request to the Google Drive API
    // You'll need to replace 'YOUR_API_KEY' with your actual API key
    const apiKey = "AIzaSyDkdLWsQ1N9cGxGNx0reL17BUjNq1Pts78";
    const apiUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents&key=${apiKey}&fields=files(webContentLink,name)`;

    const response = await axios.get(apiUrl);
    const data = response.data;
    const photosData = data.files.map((file) => ({
      src: file.webContentLink,
      width: 4, // Modify with the actual width of the photo
      height: 3, // Modify with the actual height of the photo
    }));

    return photosData;
  };

  const displayedPhotos = photos.slice(0, 5);

  return (
    <div className="text-black pb-5 ">
      <h5>{props.name}</h5>
      <div>
        <Gallery className="" photos={displayedPhotos} onClick={openLightbox} />
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      <h5>Casa com piscina, T5</h5>
      <h6>10 hóspedes | 2 suítes | 3 quartos | 3 casas de banho</h6>
      <button style={{ float: "right" }} className="contactar">
        € 350 / noite
      </button>
    </div>
  );
}

export default HousePhotos;
