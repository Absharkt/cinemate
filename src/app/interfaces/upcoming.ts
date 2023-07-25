// export interface UpcomingMovies {
//     id: number
//     title: string
//     language: string
//     overview: string
//     release: string
//     imgUrl: string
// }


export interface MResponse {
    dates: {
        maximum: string
        minimum: string
    }
    page: number
    results: MResults[]
    total_pages: number
    total_results: number
}

export interface MResults {
    id: number
    title: string
    language: string
    overview: string
    release: string
    imgUrl: string
    posterUrl: string
}