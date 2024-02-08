import React, { useState } from 'react'
import EntryField from './EntryField'
import { getCurrentDate, validateAllEditUser } from '../Js/Validator';
import ErrorAtEntryField from './ErrorAtEntryField';

const EditProfile = ({ data,editUser}) => {
    const { firstname, lastname, email, gender, mobile, birthdate,} = data
    const [errors, setErrors] = useState({});

    const [editData, setEditData] = useState({
        firstname,
        lastname,
        email,
        bday: birthdate,
        mobile,
        gender,
    });

    const clearError = (fieldName) => {
        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            delete updatedErrors[fieldName];
            return updatedErrors;
        });
    };

    const setError = (fieldName, errorMessage) => {
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: errorMessage }));
    };


    const handleOnchange = (e) => {
        setEditData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }))
        clearError(e.target.name);
    }

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        if(validateAllEditUser(editData,setError)){
            editUser(editData);
        }
    }

    return (
        <>
            <form onSubmit={handleUpdateProfile}>
                <div className="d-flex bd-highlight">

                    <div className="p-2 flex-fill bd-highlight">
                        <EntryField
                            label={"First Name"}
                            name={'firstname'}
                            id={'firstname'}
                            type={"text"}
                            value={editData.firstname}
                            onChange={handleOnchange}
                        />
                        {errors.hasOwnProperty("firstname") && (
                            <ErrorAtEntryField errorMessage={errors.firstname} />
                        )}
                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                        <EntryField
                            label={"Last Name"}
                            name={'lastname'}
                            id={'lastname'}
                            type={"text"}
                            value={editData.lastname}
                            onChange={handleOnchange}
                        />
                        {errors.hasOwnProperty("lastname") && (
                            <ErrorAtEntryField errorMessage={errors.lastname} />
                        )}
                    </div>
                </div>
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">
                        <EntryField
                            label={"Birthdate"}
                            type={"date"}
                            name={'bday'}
                            id={'bday'}
                            value={editData.bday}
                            max={getCurrentDate()}
                            onChange={handleOnchange}
                        />

                        {errors.hasOwnProperty("bday") && (
                            <ErrorAtEntryField errorMessage={errors.bday} />
                        )}
                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                        <EntryField
                            label={"Enter mobile no"}
                            name={'mobile'}
                            id={'mobile'}
                            type={"number"}
                            value={editData.mobile}
                            onChange={handleOnchange}
                        />
                        {errors.hasOwnProperty("mobile") && (
                            <ErrorAtEntryField errorMessage={errors.mobile} />
                        )}
                    </div>
                </div>

                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">
                        <EntryField
                            label={"Email"}
                            name={'email'}
                            id={'email'}
                            type={"email"}
                            disabled
                            value={editData.email}
                            onChange={handleOnchange}
                        />
                        {errors.hasOwnProperty("email") && (
                            <ErrorAtEntryField errorMessage={errors.email} />
                        )}
                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                        <label className="form-label mt-4">Gender</label>
                        <div className="d-flex">
                            {["m", "f"].map((item) => {
                                return (
                                    <div className="form-check flex-fill mt-2" key={item}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name={'gender'}
                                            onChange={handleOnchange}
                                            id={item}
                                            value={item}
                                            checked={editData.gender === item}
                                        />

                                        <label className="form-check-label" htmlFor={item}>
                                            {item === 'm' ? "male" : "female"}
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        {errors.hasOwnProperty("gender") && (
                            <ErrorAtEntryField errorMessage={errors.gender} />
                        )}
                    </div>

                </div>


                <button type="submit" className="mx-2 mt-2 p-2 bg-warning btn btn-primary">Save changes</button>
            </form>
        </>
    )
}

export default EditProfile
