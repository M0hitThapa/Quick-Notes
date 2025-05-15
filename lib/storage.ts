export function formatDate(timeStamp: number):string {
    return new Date(timeStamp).toLocaleDateString("en-US", {
        year:"numeric",
        month:"short",
        day:"numeric"

    })
}