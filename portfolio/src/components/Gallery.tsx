import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Upload, DownloadIcon, Cat } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Gallery: React.FC = () =>
{
    const [images, setImages] = useState<string[]>([])
    const [uploading, setUploading] = useState(false)

    useEffect(() =>
    {
        // In a real application, you would fetch this data from an API
        const imageUrls = Array.from({ length: 37 }, (_, i) => `/img/${i + 1}.jpg`)
        setImages(imageUrls)
    }, [])

    const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) =>
    {
        const file = event.target.files?.[0]
        if (!file) return

        setUploading(true)

        // Simulating API call to Google Vision API and image upload
        setTimeout(() =>
        {
            setImages(prev => [`/img/${prev.length + 1}.jpg`, ...prev])
            setUploading(false)
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-[#121212] text-[#EDEDED] font-['Commissioner',sans-serif]">
            <header className="fixed top-0 left-0 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-2 z-50 bg-[#121212]">
                <div className="w-full flex justify-between items-center h-[60px] sm:h-[100px]">
                    <div className="flex items-center">
                        <Cat className="h-6 w-6 sm:h-8 sm:w-8 mr-2" />
                        <h1 className="text-lg sm:text-2xl font-bold">C.Ai.T.S - CAT GALLERY</h1>
                    </div>
                    <nav>
                        <Link to="/" className="text-sm sm:text-base hover:text-secondary transition-colors">HOME</Link>
                    </nav>
                </div>
                <div className="text-yellow-400 text-xs sm:text-sm font-semibold text-center w-full py-1">
                    This app is still in development. Some features are not yet available.
                </div>
            </header>

            <main className="pt-[100px] sm:pt-[140px] px-4 sm:px-6 lg:px-8">
                <div className="mb-8 max-w-md mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4">Upload a Cat Photo</h2>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleUpload}
                            disabled={uploading}
                            className="bg-transparent border-[#EDEDED] text-[#EDEDED]"
                        />
                        <Button disabled={uploading} className="w-full sm:w-auto bg-[#EDEDED] text-[#121212] hover:bg-[#EDEDED]/80">
                            {uploading ? (
                                <>
                                    <Upload className="mr-2 h-4 w-4 animate-spin" />
                                    Uploading...
                                </>
                            ) : (
                                <>
                                    <Upload className="mr-2 h-4 w-4" />
                                    Upload
                                </>
                            )}
                        </Button>
                    </div>
                </div>

                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="relative overflow-hidden group aspect-square">
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-white hover:text-primary"
                                    onClick={() => window.open(src, '_blank')}
                                >
                                    <DownloadIcon className="h-6 w-6" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}

export default Gallery