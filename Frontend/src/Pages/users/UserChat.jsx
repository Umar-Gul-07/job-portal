import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Smile, Paperclip, Image, Send, Check, ChevronDown, Search } from 'lucide-react'

const UserChat = () => {
    const [message, setMessage] = useState("")

  const conversations = [
    {
      id: 1,
      name: "Bj Doe",
      message: "Yo, what's the update on the item I am expecting?",
      time: "4 min ago",
      unread: true,
      unreadCount: 5,
      avatar: "/aceholder.svg",
    },
    {
      id: 2,
      name: "Jane Doe",
      message: "Yo, what's the update on the item I am expecting?",
      time: "8 min ago",
      unread: false,
      read: true,
      avatar: "/aceholder.svg",
    },
    {
      id: 3,
      name: "John Doe",
      message: "Yo, what's the update on the item I am expecting?",
      time: "9 min ago",
      unread: false,
      read: true,
      avatar: "/aceholder.svg",
    },
    {
      id: 4,
      name: "Mister Doe",
      message: "Yo, what's the update on the item I am expecting?",
      time: "15 min ago",
      unread: false,
      read: true,
      avatar: "/aceholder.svg",
    },
    {
      id: 5,
      name: "Sam Doe",
      message: "Can you confirm the delivery date for the shoes?",
      time: "20 min ago",
      unread: true,
      avatar: "/aceholder.svg",
    },
    {
      id: 6,
      name: "Merril Doe",
      message: "Yo, what's the update on the item I am expecting?",
      time: "Yesterday",
      unread: false,
      read: true,
      avatar: "/aceholder.svg",
    },
    {
      id: 7,
      name: "Sam Doe",
      message: "Can you confirm the delivery date for the shoes?",
      time: "Yesterday",
      unread: true,
      avatar: "/aceholder.svg",
    },
  ]

  const chatMessages = [
    {
      id: 1,
      sender: "Bj Doe",
      message: "Hello, are you available for a quick call?",
      time: "Friday 1:30pm",
      avatar: "/aceholder.svg",
    },
    {
      id: 2,
      sender: "You",
      message: "Sure, send me the meeting link so we can start the call",
      time: "4 min ago",
      isOwn: true,
    },
    {
      id: 3,
      sender: "You",
      message: "Sure, send me the meeting link so we can start the call",
      time: "4 min ago",
      isOwn: true,
    },
    {
      id: 4,
      sender: "Bj Doe",
      message: "Sure will send the link shortly",
      time: "",
      avatar: "/aceholder.svg",
    },
    {
      id: 5,
      sender: "Bj Doe",
      message: "http://feeds/com",
      time: "",
      avatar: "/aceholder.svg",
    },
  ]

  return (
    <div className="flex h-screen flex-col">
      {/* Navigation */}
      <header className="flex items-center justify-between border-b bg-[#ECF0FA] px-6 py-4">
        <Avatar className="h-11 w-11">
          <AvatarImage src="/aceholder.svg" />
          <AvatarFallback>Logo</AvatarFallback>
        </Avatar>
        <nav className="absolute left-1/2 flex -translate-x-1/2 space-x-8">
          <Button variant="ghost">Home</Button>
          <Button variant="ghost">Jobs</Button>
          <Button variant="ghost">Profile</Button>
          <Button variant="ghost">Settings</Button>
        </nav>
        <Button variant="ghost">Log-Out →</Button>
      </header>

      <div className="flex flex-1 overflow-hidden pt-4">
        {/* Sidebar */}
        <aside className="w-[360px] bg-[#EDF2FA] p-2">
          <div className="flex items-center justify-between gap-4 px-2">
            <div className="relative w-48">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 border-[#D9D9D9]" />
              <Input
                className="h-8 w-full rounded-lg border-[#D9D9D9] bg-white -9 text-sm focus-visible:ring-0"
                placeholder="Search"
                type="search"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="h-10 rounded-lg bg-[#2B8200] px-2 text-sm font-medium text-white hover:bg-[#236A00]"
                  variant="ghost"
                >
                  All
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem>All Messages</DropdownMenuItem>
                <DropdownMenuItem>Unread</DropdownMenuItem>
                <DropdownMenuItem>Read</DropdownMenuItem>
                <DropdownMenuItem>Archived</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ScrollArea className="h-[calc(100vh-8rem)] pr-1">
            <div className="mt-7 space-y-3">
              {conversations.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <Avatar className="h-11 w-11 shrink-0">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <h3 className="text-sm font-medium">{chat.name}</h3>
                      <span className="text-xs text-gray-500 shrink-0">{chat.time}</span>
                    </div>
                    <div className="flex items-start gap-10 mt-1">
                      <p className="text-sm text-gray-600 line-clamp-2 flex-1 max-w-[75%]">{chat.message}</p>
                      <div className="flex items-center justify-center shrink-0 pt-1">
                        {chat.unread ? (
                          <div className="h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-medium">
                            {chat.unreadCount || "1"}
                          </div>
                        ) : (
                          chat.read && (
                            <div className="flex -space-x-1">
                              <Check className="h-3.5 w-3.5 text-[#06E306]" />
                              <Check className="h-3.5 w-3.5 text-[#06E306]" />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Chat Area */}
        <main className="flex flex-1 flex-col bg-white px-6">
          {/* Chat Header */}
          <div className="flex items-center justify-between bg-[#ECF0FA] px-6 py-2.5 rounded-t-xl">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/aceholder.svg" />
                <AvatarFallback>BD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <h2 className="text-sm font-medium">Bj Doe</h2>
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                  <span className="text-xs text-[#808080]">Active Now</span>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              className="text-xs text-red-500 hover:text-red-600 hover:bg-transparent px-0"
            >
              Close Chat
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-6 py-4">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.isOwn ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl ${
                      msg.isOwn
                        ? "bg-black text-white w-1/2" 
                        : "bg-[#ECF0FA] w-[90%]" 
                    }`}
                  >
                    {!msg.isOwn && (
                      <div className="flex items-start gap-2 px-3 py-2">
                        <Avatar className="flex items-center justify-center h-11 w-11 shrink-0">
                          <AvatarImage src={msg.avatar} />
                          <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{msg.sender}</p>
                            {msg.time && (
                              <p className="text-[11px] text-gray-500 shrink-0">{msg.time}</p>
                            )}
                          </div>
                          <p className="text-sm text-gray-800 mt-1 pr-12">{msg.message}</p>
                        </div>
                      </div>
                    )}
                    {msg.isOwn && (
                      <div className="px-4 py-2.5">
                        <div className="flex items-center justify-between">
                          <p className="text-sm w-[90%]">{msg.message}</p>
                          {msg.time && (
                            <p className="text-[11px] text-gray-400 shrink-0">{msg.time}</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Message Input */}
          <div className="p-4">
            <Card className="flex items-center border-[#D3E0F3] gap-4 p-3 rounded-xl">
              <Input
                className="flex-1 border-0 bg-transparent text-sm focus-visible:ring-0"
                placeholder="Type here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
                  <Smile className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
                  <Paperclip className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
                  <Image className="h-5 w-5 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserChat