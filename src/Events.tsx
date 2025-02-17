import { useState } from 'react';
import Default from './Default';

interface Event {
  id: number,
  name: string,
  date: string,
  category: string,
  description: string,
  dateParsed: Date,
  endDate: string,
  endDateParsed: Date,
  media: string[]
  thumbnail: string,
  location: string,
}

function Events() {
  const [events, setEvents] = useState(new Array<Event>)
  const [categoryFilter, setCategoryFilter] = useState("All Events");

  async function getEvents() {
    const evs: Event[] = await fetch(`${window.location.origin}/events.json`).then(it => it.json());
    for (const e of evs) {
      e.dateParsed = new Date(e.date);
      e.endDateParsed = new Date(e.endDate);
    }
    evs.sort((a, b) => a.dateParsed.getTime() - b.dateParsed.getTime());
    for (let i = 0; i < evs.length; i++) {
      evs[i].id = i
    }
    setEvents(evs);
  }

  getEvents()

  function EventCard(event: Event) {
    return (
      <div className="card bg-[#222430] w-full shadow-xl shadow-stone-800 my-3 flex flex-col md:flex-row">
        <div className="card-body flex flex-col">
          <figure>
            <img className="flex-[0_0_auto] md:m-3 h-56 w-56 object-cover basis-1/4" src={`${window.location.origin}/thumbnails/${event.thumbnail}`} />
          </figure>
        </div>
        <div className="card-body flex flex-col gap-2 h-7 basis-3/4 items-center md:items-start">
            <div className="flex rounded-md bg-[#4e4745] bg-opacity-20 px-4 py-1 justify-center w-full uppercase text-white">
              {event.category}
            </div>
            <div className="flex p-3 gap-2 items-center card-title font-['Lato'] italic uppercase text-2xl text-white tracking-wider text-center md:text-left">
              {event.name}
            </div>
            <div className="flex flex-col">
              <p className="p-2"><i className="bi bi-calendar"></i> Date and Time: {event.dateParsed.toLocaleString()} - {event.dateParsed.getDate() == event.endDateParsed.getDate() ? event.endDateParsed.toLocaleTimeString() : event.endDateParsed.toLocaleString()}</p>
              <p className="p-2"><i className="bi bi-geo-alt"></i> Location: {event.location}</p>
            </div>
            <div className="card-actions justify-bottom items-center order-4">
              <button
                className="btn btn-outline btn-error text-white"
                onClick={() => {
                  (document.getElementById(`event${event.id}dialog`) as HTMLDialogElement)?.showModal();
                  console.log(event.id);
                }}
              >
                Click For More Details
              </button>
            </div>
          </div>
      </div>



    );
  }


  return (
    <Default>
      <div className="flex pt-6 lg:px-32 text-white justify-center w-full">
        <div className="flex flex-col p-6 gap-4 w-full">
          <div className="flex text-3xl p-2 font-['JetBrains_Mono'] text-white">
            Upcoming Events
          </div>
          {
            events
              .filter(it => categoryFilter === "All Events" || it.category === categoryFilter)
              .filter(it => it.endDateParsed.getTime() > Date.now()).map(event => EventCard(event))
          }
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex text-3xl p-2 font-['JetBrains_Mono'] text-white">
              Browse Past Events
            </div>
            <div className="flex justify-end basis-1/2 p-6 gap-4">
              <label className="form-control w-1/2">
                <div className="label">
                  <span className="label-text text-white">Category</span>
                </div>
                <select className="select select-bordered" onChange={(ev) => setCategoryFilter(ev.target.value)}>
                  <option selected>All Events</option>
                  {
                    [...(new Set(events.map(it => it.category)))].map(it => {
                      return <option>{it}</option>
                    })
                  }
                </select>
              </label>
            </div>
          </div>
          {
            events
              .filter(it => categoryFilter === "All Events" || it.category === categoryFilter)
              .filter(it => it.endDateParsed.getTime() <= Date.now()).map(event => EventCard(event))
          }
        </div>
      </div>
      {events.map(event => {
        return <dialog id={`event${event.id}dialog`} className="modal">
          <div className="modal-box bg-[#232427] text-white font-['KoHo']">
            <div className="flex rounded-md bg-[#8C1616] px-4 py-1 justify-center w-full uppercase text-white">{event.category}</div>
            <h3 className="mt-3 text-xl font-bold text-center">{event.name}</h3>
            <div className="flex flex-col divide-y divide-dotted gap-3">
              <p className="p-2">{event.description}</p>
              <p className="p-2"><i className="bi bi-calendar"></i> Date and Time: {event.dateParsed.toLocaleString()} - {event.dateParsed.getDate() == event.endDateParsed.getDate() ? event.endDateParsed.toLocaleTimeString() : event.endDateParsed.toLocaleString()}</p>
              <p className="p-2"><i className="bi bi-geo-alt"></i> Location: {event.location}</p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      })}
    </Default>
  )
}

export default Events
