import { formatDistanceToNowStrict } from 'date-fns'

export const getDate = (date:string) : string => {
    const convertedDate = new Date(date);
    return formatDistanceToNowStrict(convertedDate);
}