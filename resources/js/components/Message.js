
const Message = ({subject, from, to, datetime, body}) => {
    return (
        <>
        <div className="message block h-2/6 border-2 mt-2 rounded-md">
            <div className="messageheader border-b-2">
                Subject: {subject}
            </div>
            <div className="messagefrom border-b-2">
                From: {from}
            </div>
            <div className="messageto border-b-2">
                To: {to}
            </div>
            <div className="messagedatetime">
                {datetime}
            </div>
            <div className="messagebody block h-3/6 overflow-y-scroll border-t-2 border-b-2">
                <pre>
                    {body}
                </pre>
            </div>
        </div>
        </>
    )
}

export default Message
