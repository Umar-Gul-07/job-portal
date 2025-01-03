import {Avatar, AvatarFallback, AvatarImage} from "../../components/ui/avatar";
import {Button} from "../../components/ui/button";
import {LogOut} from "lucide-react";
import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="flex items-center justify-between border-b bg-[#ECF0FA] px-6 py-4">
                <Avatar className="h-11 w-11">
                    <AvatarImage src="/placeholder.svg"/>
                    <div className="w-12 h-12 bg-gray-200 rounded-full">
                        <img
                            src="https://placehold.io/100"
                            alt="Parkhouse English School"
                            width={64}
                            height={64}
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>
                </Avatar>
                <nav className="absolute left-1/2 flex -translate-x-1/2 space-x-8">
                     <Link to="/user-chat">
                        <Button variant="ghost">Home</Button>
                    </Link>
                     <Link to="/user/job-listing">
                        <Button variant="ghost">Jobs</Button>
                    </Link>
                     <Link to="/user-chat">
                        <Button variant="ghost">Profile</Button>
                    </Link>
                    <Link to="/user-chat">
                        <Button variant="ghost">Chat</Button>
                    </Link>
                     <Link to="/user-chat">
                        <Button variant="ghost">Settings</Button>
                    </Link>
                     <Link to="/user/notification">
                        <Button variant="ghost">Notification</Button>
                    </Link>
                </nav>
                <Button variant="ghost" className="flex items-center gap-1">
                    Log-Out
                    <LogOut className="h-4 w-4"/>
                </Button>
            </header>
        </>
    )
}

export default Header