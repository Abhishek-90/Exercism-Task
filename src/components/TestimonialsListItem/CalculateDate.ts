import { formatDistanceToNowStrict } from 'date-fns'

export const getDate = (date:string) : string => {
    const convertedDate = new Date(date)
    const formatedDate = formatDistanceToNowStrict(convertedDate)
    const formatedDateArray = formatedDate.split(" ") 
    if(formatedDateArray[0] !== "1") {
        return formatedDate
    }
    
    formatedDateArray[0] = formatedDateArray[1].charAt(0) === "h" ? "an" : "a"

    return formatedDateArray.join(" ")
}