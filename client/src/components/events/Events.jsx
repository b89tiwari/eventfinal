import Event from "../event/Event"
import "./events.css"

export default function Events({ eventList }) {
    return (
        <div className="posts">
            {
                eventList.map((evnt) => {
                    return <Event eventDetails={evnt} />
                })
            }
        </div>
    )
}