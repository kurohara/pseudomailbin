
const Message = ({message}:{message: {subject: string, from: string, to: string, datetime: string, body: string}}) => {
        return (
        <>
        <div className="message block h-2/6 border-2 mt-2 rounded-md">
            <div className="messageheader border-b-2">
                Subject: {message.subject}
            </div>
            <div className="messagefrom border-b-2">
                From: {message.from}
            </div>
            <div className="messageto border-b-2">
                To: {message.to}
            </div>
            <div className="messagedatetime">
                {message.datetime}
            </div>
            <div className="messagebody block h-3/6 overflow-y-scroll border-t-2 border-b-2">
                <pre>
                    {message.body}
                </pre>
            </div>
        </div>
        </>
    )
}

export default Message
