import React, { useEffect,useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import discordIcon from "../assets/discordIcon.svg";
import serverIcon1 from "../assets/serverIcon1.png";
import serverIcon2 from "../assets/serverIcon2.png";
import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { MicrophoneIcon, PhoneIcon, CogIcon } from "@heroicons/react/24/solid";
import { Channel ,Chat} from "./";
const Home = () => {
  const [selectedChannel, setseletedChannel] = useState('5XBuh8B0TB5Doq0UNjga')
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("channels"));
 
  const handleonClick = (e) => {
    e.preventDefault();
    const channelName = prompt("Enter a channel name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  return (
    <>
        {!user && navigate('/')}
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
            <PlusIcon className="w-6 h-6 text-discord_green  group-hover:text-white" />
          </div>
        </div>
        <div className="bg-[#2f3136] flex flex-col min-w-max">
          <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
            Official PAPA Server... <ChevronDownIcon className="h-7 " />
          </h2>
          <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-4  mr-1" />
              <h4 className="font-semibold ">Channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleonClick}
              />
            </div>
            <div className="flex flex-col px-2 space-y-2 mb-4">
              {channels?.docs.map((doc) => (
                <Channel
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                  selectedChannel={selectedChannel}
                  setseletedChannel={setseletedChannel}
                />
              ))}
            </div>
          </div>
          <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
            <div className="flex items-center space-x-1">
              <img
                src={user?.photoURL}
                alt=""
                className="h-10 rounded-full"
                onClick={() => auth.signOut()}
              />
              <h4 className="text-white text-xs font-medium">
                {user?.displayName}{" "}
                <span className="text-[#b9bbbe] block">
                  #{user?.uid.substring(0, 4)}
                </span>
              </h4>
            </div>

            <div className="text-gray-400 flex items-center">
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <MicrophoneIcon className="h-5 icon " />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <PhoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                <CogIcon className="h-5 icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#36393f] flex-grow">
            <Chat/>
        </div>
      </div>
    </>
  );
};

export default Home;
