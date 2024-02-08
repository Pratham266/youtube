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
                }));
            }
        } catch (error) {
            console.log("error :", error);
        }
    };

    componentDidMount() {
        this.props.fetchYoutube(this.state.page);
    }

    componentDidUpdate(prevProps, prevState) {
        const { userState, fetchYoutube } = this.props;

        if (
            prevState.page !== this.state.page ||
            prevProps.userState?.user?.isPremium !== userState?.user?.isPremium
        ) {
            fetchYoutube(this.state.page);
        }

        if (prevProps.userState?.user?.isPremium !== userState?.user?.isPremium) {
            this.setState((prevState) => ({
                page: 1,
            }));
        }

        this.scrollDiv.current.addEventListener(
            "scroll",
            this.handleInfiniteScroll
        );
    }

    componentWillUnmount() {
        if (this.scrollDiv && this.scrollDiv.current) {
            this.scrollDiv.current.removeEventListener(
                "scroll",
                this.handleInfiniteScroll
            );
        }
    }

    render() {
        const { youtubeState, navigate, dataId } = this.props;

        if (!youtubeState?.data) {
            console.log("in loader");
            return <Loader />;
        }

        return (
            <div
                ref={this.scrollDiv}
                className="list_page_scroll scrollbar-ripe-malinka"
            >
                {youtubeState?.data.length === 0 ? (
                    <h3 className="text-white"> No data found</h3>
                ) : (
                    <></>
                )}

                {youtubeState?.data.map((item, index) => {
                    return (
                        <div
                            key={item.channelId}
                            onClick={() => navigate(`/${item.channelId}`)}
                        >
                            <div
                                className={`list_page_card card text-white rounded border-white m-2 ${item.channelId === dataId ? "bg-dark" : "bg-black"}`}>
                                <div className="d-flex ">
                                    <ImageComponent
                                        src={item.avatarImage}
                                        alt={item.channelName}
                                        className={"border rounded-circle img-profile m-1"}
                                    />
                                    <div className="card-header">
                                        {item.channelName} &nbsp;
                                        {item.isPremium && (
                                            <FontAwesomeIcon
                                                className="list_page_card_icon"
                                                icon={faStar}
                                                beat
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

/*

add a middlware for pending,fullfill,reject in redux, --> done

add a layout route for the private and public  ---> done

create a scss for the all component ---> done 

loader from the redux state in userBar   ---> done

in userprofile set useEffect in handlecolse --->done

update the profile modal and remve the entryprofile and update the profile also  ---> done

in /:dataId path add only Details component   ---> check

update a sorting fun. using backend api in channel name default32e asc: and in count : desc ---> done

create a differrnt component  name TableHeade in table. ---> done

*/
