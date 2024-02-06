import React, { useEffect, useRef } from 'react'
import { cloudNameEnv, uploadPresetEnv } from '../constants';

const ImageUpload = ({ setImage, error }) => {
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

                    setImage(res.info.secure_url)
                }
                if (error) {
                    console.log("here in error cloud : ", error)
                }
            }
        )
    }, [])

    return (
        <div className="form-group">

            <label className="form-label mt-4">
                Upload your Pofile Picture
            </label>

            <input
                className="form-control"
                type="file"
                name="image"
                onClick={(e) => {
                    e.preventDefault();
                    return widgetRef.current.open();
                }}
                error={error}
            />

        </div>
    )
}

export default ImageUpload
