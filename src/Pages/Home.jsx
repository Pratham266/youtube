import React, { Suspense, lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BackendUrl } from '../constants';
import UserProfile from './UserProfileModal';
import { verifyUser } from '../redux';
import DataPage from './DataPage';


const Home = () => {
    const userData  = useSelector((state)=>state.user.user);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleModal = () => {
      setShowModal(!showModal);
    };
    
    useEffect(() => {
      // remove this console.log
      //dispatch(verifyUser(navigate));
    }, []);
  
    return (
      <>
        
        <div className="w-full p-2 text-white bg-black ">
          <div className="d-flex flex-row">
            <div className="p-2">
              {userData && <img
                // src={`${BackendUrl}/${userData.image}`}
                src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKwAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYHAQj/xABBEAABAwICBgYHBwIFBQAAAAACAAEDBBEFEgYTISIxMhRBQlFhgQcjUnFykaEVJDM0YrHBQ/AWgtHh8SUmNZKy/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECBAMF/8QAJBEAAgICAgIBBQEAAAAAAAAAAAECEQMxIUEEElETMkJDYSL/2gAMAwEAAhEDEQA/AOjiygnZXGFVpxXSWjkizRNuIgCo0jbitiSgslXjpt146AKdW++mAY5F5ViWdNCMsiBAyt3pVLhg75eSZUjvqxhw75L0P1GP9gWFlQxVvVIgKoYnyLCtmt6All44ipHZNdl60dHmy2MYVbpWI+VVUXwgc4by4Z8cfW6OuHJJugfXOQc0aD1cecPwy/8AVbWophJIaGP2RXnNG05nqckqMU4bgohpNRRxAMgjvZmVSmbcFJCY9mUrSEnRRa08oq6+EyZN0lQgdriSVs8LmSTALhKmylnQqjxmlqA3ZBL/ADIjCQy8qmy6L9JlyK2wIMUskR7qnixD2hRYwmwr12VWOtjPtKdpRNAFWobfXg8idUOPNm3e/uXLtPNPfVFh+G66OMtkk4g7OTdzcLN5372bg4IPaR6W4LhByDPVa6UdjxQbzs/c78Gfwd7rE4l6TMQlzR4JHFSx9ch2kkZ+p26m8xdYh55Kjlk1gj2DBms3gzM30ZQywwl6yPNTmPXtdvr+/wBFbzSr16EsKuw6WmGkkpkRY5XZtl2E8tvczbLIvhHpExylPLiEg4jTFbZLYTH3Ezd19js/vZZGeLOEcgj6zm72vba3iz7U2MMko5uUif5dS5ex09TtuFaQ4Xi+XolUGtLbqDJhkbyfi3iyJuy4RFTR1UWUt2QS3X4O3Wz/ACv8lq9EdJK7CqiOjxKY5qOQmFjPeeJ3e3F9tvD5Ldi8tPiXBjy+K1yuTpLsjGEciFuyKYTyLvnf+Djh+4vyupg5VXm51OHIvNNxm9LX+7j8TfuhlJyiiWlv4Q/GyHUnKKFsmQRw1vvArSgI5FnMN/MLSR8ipjieOApJySko+f6IJIt6IiH4Sdl1TRQpDooykLMWXisDHS8q6FowOSij+FQgI9IK/oADIWbLmZVKTHaeXtKxpNTdIiy/qWXPDCBIDZR1MMvKQqxFOXZkWECKqp+WQldp8RqoubeRYWEtP8Xmw3RSumikEZSBgF83C7sz28bO6+egnkOozawuu78G28Hs3jtXU/SLXSV+DyU+Usxaso+67HZ2+rP5eCzWiWjvTcTjGUR1QmxPu3zW/hV0UiDC9HqyoiGSeQxzbWbM9rI3DosJ70ubMt8dLT0+6IjmFQMwrLkk09m7HCLWjMw6LxiAjlzD+1u5XG0ToSDeH/ZHRT8y4+z+Tr6L4Aw6I4X2hPxyqjjmiJUtIVVh8muGO5aoxvdvB1qgP2kQgYZQy+VlUZMicF8HMqP0k1VLLDTz4eJAIiMjkbsTuzMzu3U3DrXYcFljqKeOaIs0cgsQv3s7XZcR02wHouJzSRe1mZhHbZdG9EmIyVuBFTyc1IeQfAXZnZvLb5WXqQ8hzjTPLngUJWjbyc6sByqvLzqyHIuZSMvpb+FH8bKhSNuCiGlfJH8bKlStuCiOyJBDDfzC0cfIs7hv5haMORVIcT1JJJSWcqggzgtlgQZKcRWcog3FqMLbJEiuLJvklqodaqRUQ+yiZpqgoEHh4+yoDw4fZR3KlkFFCoxWkOCjUUgly6s2fyd2u37fJTYHh8dLFrBjykReG3xR7H4R+zJPiF/K7XWUk0rwWgAqerrn18ZsDxxRGbiT3s12Z2Z9j7H42dV0XALVI5zzKDKguI6SSS7uH4fWkHWZ07i7v7is6FTaVVUXNh8o97mBW+mxY5xd6PQxtUbNmFIMp9pZrCtII6/ly5+thK6kxLH4aDMRE2b9RWb5uuPdHelV2aZ4h7KsU24awdLphUVHLRzFvbHihMmt72Z2Rmh0qEf/ACVPWxx+30KV2bzYVSTvRyk1Ww3jWGQ1sRSEOaTLsTfRrh/QAxIfama267PsZm2/JRxaS4DWgUMGLUhS3ZgApWEnfhZmez38EQ0ZmEAqi3RKSVn8OC1YuJGHLyjTnzqwHIhfSR9pTBXx+0u5nTBOlTbkfxKjT8gqfSCqGoOOMfauq8L7iI7JkEcM/MLRByLO4T+YJaMeRVLY4CSXtklJZz6hbcWjw/kWeoOVaCi5FX4kdlk3TbppOm3XIskunM6huvWdMCti01OdPJRyzDHJMDsObY1/fwXNYKL/ALkpcU6GNPruk3e+wzG1itwZ7EW3i+1b6vw2Soq6yoIiKIYY3CMiZmd3d2fj12Z/mqOMYJVfZkM1JG80tJM80YC7NrQdnAmZ32Xdnd2vsuzbWXL2ttGr6ajFPZmcT+0qoMtDGIxCTXMrXJ+Luzdf09/dlZqbHgzFUkW91Zm492zzW2rcWocgjLrYZIxyuFTCcTtb3szP72uh9RiuE5NYVQBD3Azm7+DMzOud9VZoVPm6MjDg1RiuNUcH5cyAzmkHY7Azs3V132eanqsAkwjHCjzFVFqWOGU9r2u7Fxfi2xr+Ld62Wj9ERlUYpPC8JT2CKMtjhG13Zn7nd3d3bxZupWtIab1NPiAx6x6YnzALXI4ybeZvFnZnt15bdaTm9B6R+7+mGePHjylTFMPG7CTPbb3O9uF1rMGkxaKk/wCpCBR5WvvNcX77cdj9d/kmDieEjlKLEKYc21o5TaM2bxZ7OiNFi+D5rFXUxGTfhxytITt4C13fyZS3fFDaS5uwJiOHUdVpBNiEke9S0Mc7bux52M8hHba7WZ2f68EaOUsnSsPkIYJrHG3GzO2xvJFsGpdbT4hWSU7w9LFgjjMcptEIuw5m6nd3N7PtZiZns90LknKgpB6JGP3cWYW6gbqayr39as4/R+raXBQ/xFXU55S3lcix6SXLmEhUOIU5VFRriERkks5MI2a9mvbzXkdLkyrupNmGUadBOGTWnmRKPkQqlbfRUH3FaJLNNPqjzIrFi0fa3UEZe2VWGjSR4hGXaFJZxmSTCylQciPUnIgdDyI3S8if4h2WmiIuymlEXskidOI5E94hUUUBnFeM6LFTioipB9lFAB8cky4PH+qbK7+T2v8ANaKljh6DCMOXVCDMPutsVTo2UOViATYiEhzMTPsdrfJ/JWKSLotEMI5csd2Zhu9mvduPvXJRqbZoc7xRj8MGYzQUp08kko7wi793kufV4w0+8IjrM1mfi4+LLaaRYh6rVjzFxfwWMmHMeYi9zeHes2V26Ru8ZNR5IwxeSXF6rD4Kb7nCDPDOJPZ37nvxd22/8quOkRxYzHhktIZU8jbZifZfwa3V33VsoR1Rbvj5qQIISARljHqfe4M6hvk7JIdSxxymXtZna47GfxRigjybuZD44hHei7KvUx9pShT5QViHsl2hdvmsrQkUstVR1OUpYZWFzEbMTMTWe3uWpgLcL4XQHCsLKnrS9ZrJOec+93vZrdXeutXRwhJRUmxTNnlT3iHIrk1GOfMopAyLVR5dlWJvWoiDKhE3rUSjZWiRzMnWXoin2TAjZkk+ySYA+h5EZpn3EHouRF6fkTeg7DtM+4pcygpuRSpFDnJNZ14mk6AJWdMp4I4qco4828Tk7kTk7u/F3d1UKo30o6zIe9y8H8PFSykzO6UQEG92dv8Af7LKauslP1EkQx8LmLl9Lsuj4/TDUUU0eXeyO45e/qssRBQ4gACPQ6jrf8J/9FimqkengknABT0lRnzFikub9IMw/K3BSU1NXZ8o4kMnhPDf5OztZFKuimiP18ZRlxsQ2eydTwZOX/dQ2/g03wVY466nlzTlEUext2/8otTH/wDLWUEoSH6svJPpRybuXeUdkSfAapQ6QGpzEIyXG48WZ9l2RPDMKKnAtfMMkmxs4hluzcL7Xu6E0UmQyIf6d3+S0OFVHSKcZC7Q3WzBFNWeb5E2nXTKFfSkB7qHVFHN7JLTSMJmpSiHItLRlMEwZJURj5E/HYRiq4yHtJsfIpoRKzr268ES7KRMQcwpgK6SZdJMClR8qLU/IKE0fKi1PyCm9D7DtPyKRR0/IpEhniafInppoAqsO+vJwHInM2+lKO4kNDMPMqinIe1CeXxdrbP5byVh59UBEQ7yF4LLqsYmp+zMF/Nn2fR3Rc97MJc3FlzkqfBcHa5Ob4vUTFWzSFm3ifZ3Kj03VS5kcxDDpDqJN3tP/bIVUYZJnzEJfysLuz14zVEZ4nrQ5Vco5JD3iVeKlycwq2EmX/KpJfOgtRBniKPtELtcep32LnxaVaQ6HY5HT9M6ZQ7bxTszu1ndnZitduGx9q6Jg45AkqpeQb5fF2/hlxbSuv6bjBZeWMn+bu7v+63eOmkef5NNn0NhmIU+KUlPXUhZophYm7272fxbgiV9xcK9HWmg4HUdDxAiLD5i48XifvZu5+tvNdwhmjqKcZoJBkikFiExJnZ2fg7OtLMqM7j/AOYj81FE24pccb73H5psbbilLkll7DAEzLMi8lJGYcooVhX4pI6ybKiB58KHs7qSLpJBRhaNtxFqfs/EyFUXIisHZ+JN6A0FO24pFFT8ilSGNTJFI7KKY44gzSkIj3lsTArNzrycssREW6Ijd36mZUanGIwylTDrMxM2fgzM72v4ss36QcZkoMCkEpPW1FwbLs2ddm9yagxWO0fxCTSHTDNQyFHheFC8ksg/15HZ2Zr91nd/JlvqjdCQv0rJej/BxwXRSPMPr6u80r9e1rM3ktDhVaOJYVHNm3srhJ4Gz2f6suM5W6OsY0rA2WQuXmzJxwEYcqvU49lWDj3Fm9TV7GTrKbJ8KZheHdIPWSjlgHi5cSfuZHJqQZZfWcvd3ryeTcyiOUR2Mw8GZOGC3b0KeelS2ZvTvGxwjBJCjyiRDkiDh4fyuHZ+0XMW11p/SLjf2ljZU8ZZoKW4Nl2s79brKXWyKoxtkgHkW/0F9IP+G6f7Prqc6ikkNzZxPeivZnsz7HZ7Xts23XPGffSlP1vwizfRWSfQUePYXj5xyYbVBIXXGW6be9n2okAr5xgqJIjEoiISHg4lZ2WzwD0hYlQZY67LWwD7ew2bwf8A1ukkS0dow1vWkjTLF6K6W4Pi5iMVUMM5f0JyYXd/B+D+S2jIexxPUl4kpLMRRfhCisHZ+JC6LlFFafnFN6JD8HInmQgBEW6I8XTIeRZvS2sKWtw/A4C3qs3OfLxaENr/ADezeboSt0DdIIVGOR6opKYSIeDH1P7u9ZqU6jFasRnkLJmvbqZm47ETqWGWoGni5R2MwqGsjGlp5iHmKwN734rRFJHNtsiw5hrZSkyjqh3Rbqs3BYHSmqkx/Tinw2LeihlYLeDWcn/ZlvquojwPRyorCyiUcTu3i9tn8LnfozjKXFazGKkt4bszkTM7u73d9vioyypHTGrZ2whEYoxi/DEGYX8GayxmjtbJT1tdSxFlyzSPbqtmdaPApCCi1dXmIpBc77d13u9rKk+juqxPp1JJmiqDdyzdm/F/FtnzWHLFumjZhnFWpBClk38vaVuSfVfqk+g/6uo3GGLtZfh2u7e9UZaqHPuxmPxK4QrZynO9DpDWS0/x77FwSQoi+81F44W67vxfyb+FqCNcI9IGOfbWkEmqL7tT3ii7ns+1/N/2ZdUcmZl37X9uvWJNSVEjmdelII7xCOYkxlC75izfJAEwEphNVxT2dAFsJVq9H9O8ewXKMFYU0A/0KnfG3hfa3k7LGsSkE07CjveAelHB8RjYMTEqGZuZ3ucbv4OzX+beaS4M0pCklSDk7/RcoorBzihdFyCidPzj8Sl6APw8ixERFLpbjGKTl6qliCli99sxW+bfJbYHtA79zLA4qTxYHuP+NUmUn6nz/wCy7YlZE2F8CzVB1FYXLty+5S1IdIljH/M/vfgrFFGMOFRCDWZ2ZnTKLflmIuLO7Mrb7EkYH0yYp0fDKfDYi3pCzE3g3D6unaE4WVLglHDl3qizk/he7/RZL0jynVabnHM9wDVgLdzWuumYADNUQN1BA1m87LNkdySO+NUrNPE460fl9EQhITosvvZ/J/8AhCRezg7dRMr0VzkGG7sFr7E6EyvO2cy7IiquQebLvFw8EdrRCnp3aKMW97f33obUgLVmRmsLGwNbuvZIaMh6QsZHA9HJtQX3mo9VE/Wzvxfya7/JcFd11j0xVk0NPS0oHaKbMZt3uz2ZcmVVRDdiSSXjvYczcUAMlLNuj5rwWXjKQUhjkl4kmIeyddMFIkAOckk0UkAf/9k="}
                className="rounded-circle"
                style={{ width: "60px", height: "60px" }}
                alt="profile_photo"
              />}
              
            </div>
            <div className="p-2">
              <h5 className='text-white'>{userData.firstname} {userData.lastname} Pratham barot</h5>
              <p className="me-auto" style={{"cursor":"pointer"}} onClick={handleModal}>
                Profile
              </p>
            </div>
          </div>
        </div>

        <DataPage/>
        {showModal && <UserProfile handleClose={handleModal} />}
      </>
    );
}

export default Home
