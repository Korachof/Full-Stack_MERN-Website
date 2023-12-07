
import React from 'react';
import ImageGallery from 'react-image-gallery';

const photos = [
    {
        original: "images/abduction_of_prosperpina_borghese_gallery.jpg",
        thumbnail: "Abduction of Prosperpina from the Borghese Gallery in Rome, Italy.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/astoria_column_view.jpg",
        thumbnail: "Landscape view in Astoria, Oregon from the Astoria Column",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/berlin_wall_art.jpg",
        thumbnail: "Art painting at the Berlin Wall in Berlin, Germany.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/lustgarten_berlin.jpg",
        thumbnail: "Lustgarten Cathedral on Museum Island in central Berlin, Germany.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/neil_diamond_concert_portland.jpg",
        thumbnail: "Neil Diamond concert at Moda Center in Portland, Oregon.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/painted_hills_oregon.jpg",
        thumbnail: "Painted Hills geological site in Wheeler County, Oregon.",
        description: "2018 Christopher Partin",
        originalHeight: "450px"
    },
    {
        original: "images/statue_university_of_portland.jpg",
        thumbnail: "Statue of strange man at University of Portland",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/trevi_fountain_rome_italy.jpg",
        thumbnail: "The Trevi Fountain by Nicola Salvi in Rome, Italy.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/warhammer_lord_of_change.jpg",
        thumbnail: "Tzeentch Lord of Change from Warhammer 40k or Age of Sigmar",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    },
    {
        original: "images/warhammer_nurgle_parade.jpg",
        thumbnail: "Nurgle and Death Guard army for Armies on Parade. Warhammer.",
        description: "2018 Christopher Partin",
        originalHeight: "450px",
    }]

function GalleryPage() {
    return (
        <>          
            
            <h2>Image Gallery</h2>
        
            <article>
                <ImageGallery items={photos} />
            </article>
        </>
    );
    }

    export default GalleryPage;