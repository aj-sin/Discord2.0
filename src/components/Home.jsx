import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { Plusicon,Downicon } from "../assets/icons";
import discordIcon from "../assets/discordIcon.svg";
import serverIcon1 from "../assets/serverIcon1.png";
import serverIcon2 from "../assets/serverIcon2.png";
import {Channel} from "./"
const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("channels"));
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  const handleonClick=(e)=>{
    e.preventDefault();
    const channelName=prompt("Enter a channel name")
    if(channelName){
        db.collection("channels").add({
            channelName:channelName
        })
    }
  }
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max items-center">
          <div className="h-12 w-12 bg-discord_blue rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-100 ease-out">
            <img src={discordIcon} alt="" className=" w-8" />
          </div>
          <hr className="w-5 border border-gray-700 mx-auto " />
          <img
            src={serverIcon1}
            alt=""
            className="w-12 rounded-full hover:rounded-xl transition duration-300 ease-in-out"
          />
          <img
            src={serverIcon2}
            alt=""
            className="w-12 rounded-full hover:rounded-xl transition duration-300 ease-in-out"
          />
          <img
            src={serverIcon1}
            alt=""
            className="w-12 rounded-full hover:rounded-xl transition duration-300 ease-in-out"
          />
          <img
            src={serverIcon2}
            alt=""
            className="w-12 rounded-full hover:rounded-xl transition duration-300 ease-in-out"
          />
          <div className="h-12 w-12 bg-[#36393f] rounded-2xl flex justify-center items-center cursor-pointer transition-all duration-100 ease-out hover:bg-discord_green group">
            <Plusicon className={"w-6 h-6 text-discord_green  group-hover:text-white"}/>
          </div>
        </div>
        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            Official PAPA Server...{" "}
            <Downicon/>
          </h2>
          <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
               <Downicon className={"h-4  mr-1"}/> 
              <h4 className="font-semibold ">Channels</h4>
              <Plusicon className={"h-6 ml-auto cursor-pointer hover:text-white"} onClick={handleonClick}/>
            </div>
            <div className="flex flex-col px-2 space-y-2 mb-4">
                {channels?.docs.map((doc)=>(<Channel key={doc.id} id={doc.id} channelName={doc.data().channelName} />))}
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
