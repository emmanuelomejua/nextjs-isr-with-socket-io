import React, { Dispatch, SetStateAction } from 'react'

interface EType {
    previewURL: string;
    onClose: () => void;
    settings: { type: "original" | "square" | "wide"; sensitive: boolean; }
    setSettings: Dispatch<SetStateAction<{
       type: "original" | "square" | "wide"; 
       sensitive: boolean; 
    }>>
}

const ImageEditor = ({ previewURL, onClose, settings, setSettings}: EType) => {
  return (
    <div className='fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center'>
        <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
        ImageEditor
        </div>
    </div>
  )
}

export default ImageEditor;
