import React, { useState } from 'react';
import  Vision  from '@google-cloud/vision';

const ImageUpload = () =>
{
    const [image, setImage] = useState(null);

    const handleImageChange = (event) =>
    {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleImageUpload
        = async () =>
        {
            try
            {
                const client = new Vision.ImageAnnotatorClient();
                const [results] = await client.annotateImage({
                    image: {
                        content: image.buffer.toString('base64'),
                    },
                    features: [
                        {
                            type: 'LABEL_DETECTION',
                        },
                    ],
                });

                const labels = results.responses[0].labelAnnotations;
                const isCat = labels.some((label) => label.description === 'cat');

                if (isCat)
                {
                    // Add the image to your gallery
                    console.log('Image is a cat!');
                } else
                {
                    console.log('Image is not a cat.');
                }
            } catch (error)
            {
                console.error('Error:', error);
            }
        };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleImageUpload}>Upload Image</button>
        </div>
    );
};

export default
    ImageUpload;