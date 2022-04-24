export function isArray(arr: any) {
    if (arr && Array.isArray(arr) && arr.length > 0) return true
    else return false
}