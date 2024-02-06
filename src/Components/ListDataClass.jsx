import React from "react";
import Loader from "./Loader";
import SmallLoader from "./SmallLoader";
import ImageComponent from "./ImageComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

class ListDataClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
        };
        this.scrollDiv = React.createRef();
    }

    handleInfiniteScroll = () => {
        const container = this.scrollDiv.current;
        const { scrollHeight, scrollTop, clientHeight } = container;
        try {
            if (scrollTop + clientHeight + 2 >= scrollHeight) {
                this.setState((prevState) => ({
                    page: prevState.page + 1,
                }))
            }
        } catch (error) {
            console.log("error :", error);
        }
    };

    componentDidMount() {
        this.props.fetchYoutube(this.state.page)
    }

    componentDidUpdate(prevProps, prevState) {
        const { userState, fetchYoutube } = this.props;

        if (prevState.page !== this.state.page || prevProps.userState?.user?.isPremium !== userState?.user?.isPremium) {
            fetchYoutube(this.state.page)
        }

        if(prevProps.userState?.user?.isPremium !== userState?.user?.isPremium){
            this.setState((prevState) => ({
                page: 1,
            }))
        }

        this.scrollDiv.current.addEventListener("scroll", this.handleInfiniteScroll);
    }

    componentWillUnmount(){
        if (this.scrollDiv && this.scrollDiv.current) {
            this.scrollDiv.current.removeEventListener("scroll", handleInfiniteScroll);
          }
    }

    render() {

        const {youtubeState,navigate,dataId} = this.props;

        const scrollStyle = {
            overflowY: "scroll",
            height: "520px",
        };

        if (!youtubeState?.data) {
            console.log("in loader");
            return <Loader />;
        }

        return (
            <div
                style={scrollStyle}
                ref={this.scrollDiv}
                id="pratham"
                className="scrollbar-ripe-malinka"
            >
                {youtubeState?.data.length === 0 ? (
                    <h3 className="text-white"> No data found</h3>
                ) : (
                    <></>
                )}

                {youtubeState?.data.map((item, index) => {
                    return (
                        <div key={item._id} onClick={() => navigate(`/${item._id}`)}>
                            <div
                                className={`card text-white  rounded border-white m-2 ${item._id === dataId ? "bg-dark" : "bg-black"
                                    }`}
                                style={{
                                    maxWidth: "20rem",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                            >
                                <div className="d-flex ">
                                    <ImageComponent
                                        src={item.avatarImage}
                                        style={{ height: "40px", width: "40px", margin: "5px" }}
                                        alt={item.channelName}
                                        className={"border rounded-circle"}
                                    />
                                    <div className="card-header">
                                        {item.channelName} &nbsp;
                                        {item.isPremium && (
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                beat
                                                style={{ color: "#FFD43B" }}
                                            />
                                        )}
                                    </div>
                                </div>
                                <p className="p-2">{item.description}</p>
                            </div>
                        </div>
                    );
                })}

                {youtubeState?.loading ? <SmallLoader color={"white"} /> : <></>}
            </div>
        );
    }
}


export default ListDataClass;