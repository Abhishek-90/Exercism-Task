import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { tracks, testimonials } from "../../constants/ApiEndpoint"
import { AllTrackImage } from "./AllTrackImage"
import { TrackFilterItem } from "./TrackFilterItem"

function updateState(setState: Function, state: any) {
  return new Promise((resolve: Function) => {
    setState(state, resolve())
  })
}

const fetchTracks = async (url: string) => {
  try {
    const response = await axios.get(url)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const TrackFilter = () => {
  const [trackImage, setTrackImage] = useState<string>(
    "https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/logo-42e9b829cf6816496069a62608cb51e7c13624bd.svg"
  )
  const [trackList, setTrackList] = useState<any[]>([])
  const [testimonialsCountList, setTestimonialsCountList] = useState<any[]>([])
  const [isTrackListVisible, setIsTrackListVisible] = useState<boolean>(false)
  const { track } = useSelector((state: any) => state.testimonial)
  const [totalCount, setTotalCount] = useState(0)
  useEffect(() => {
    const fetchTracksCaller = async () => {
      const tracksList = (await fetchTracks(tracks)).tracks
      const testimonialsCountList = (await fetchTracks(testimonials)).testimonials.track_counts
      console.log(testimonialsCountList)
      const finalTrackList = tracksList.filter(
        (item: any) => testimonialsCountList[item.slug] > 0
      )

      await updateState(setTrackList, finalTrackList)
      await updateState(setTestimonialsCountList, testimonialsCountList)
    }
    fetchTracksCaller()
  }, [])

  return (
    <>
      {track === "" && 
        <div
          className="track-filter h-12 ml-4 mr-2 w-20 px-2 mt-[16px] bg-downArrow-2 bg-no-repeat bg-right cursor-pointer rounded-lg outline outline-2 outline-[#2E57E8] flex items-center"
          onClick={async () =>
            await updateState(setIsTrackListVisible, !isTrackListVisible)
          }
        >
          <AllTrackImage/>
        </div>
      }
      
      {track !== "" && <div
          className="track-filter h-10 ml-4 mr-2 w-20 px-2 mt-[19px] bg-downArrow-2 bg-no-repeat bg-right cursor-pointer rounded-lg"
          onClick={async () =>await updateState(setIsTrackListVisible, !isTrackListVisible)}
        >
          <img
            className="h-full w-[37.56px]"
            src={trackImage}
            alt="trackImage"
          />
        </div>}
      {isTrackListVisible && (
        <div className="trackList absolute mt-20 ml-3 w-[376px] min-h-fit max-h-[364px] overflow-y-scroll bg-[#FFFFFF] rounded-lg outline-[#2E57E8] shadow-l">
          <TrackFilterItem
            title="All"
            slug=""
            icon_url=""
            count={totalCount}
            setImage={setTrackImage}
            setTrackVisibility={setIsTrackListVisible}
            key={track.title}
          />
          {trackList.length > 0 && (
            trackList.map((track) => {
              return (
                <TrackFilterItem
                  title={track.title}
                  slug={track.slug}
                  icon_url={track.icon_url}
                  count={testimonialsCountList[track.slug]}
                  setImage={setTrackImage}
                  setTrackVisibility={setIsTrackListVisible}
                  key={track.title}
                />
              )
            })
          )}
        </div>
      )}
    </>
  )
}

export { TrackFilter }
