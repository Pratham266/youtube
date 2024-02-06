export const BackendUrl = import.meta.env.VITE_BACKENDURL;

export const cloudNameEnv = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

export const uploadPresetEnv = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const config  = {
    headers: {"Content-Type": "application/json"},
    withCredentials: true,
};
