import React, { useEffect, useRef } from 'react'
import { cloudNameEnv, uploadPresetEnv } from '../constants';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUpload = ({ setImage ,clearError}) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef?.current?.createUploadWidget(
            {
                cloudName: cloudNameEnv,
                uploadPreset: uploadPresetEnv,
            },
            (error, res) => {
                if (res.event === "success") {
                    clearError('image')
                    setImage(res.info.secure_url)
                }
                if (error) {
                    console.log("here in error cloud : ", error)
                }
            }
        )
    }, [])

    return (
        <div className="form-group pointer_cursor"  onClick={(e) => {
            e.preventDefault();
            return widgetRef.current.open();
        }}>

            <label className="form-label pointer_cursor mt-4">
                Upload your Pofile Picture
            </label>

            <FontAwesomeIcon size='xl' className='mx-4 text-black' icon={faUpload} />

        </div>
    )
}

export default ImageUpload
