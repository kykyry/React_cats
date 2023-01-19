export interface Iproduct {
    id: number
    intro: {
        default:string
        wantToDelete:string
    }
    title: string
    taste: string
    gift: {
        portion: number
        mouse: number
        extra?: string
    }
    weight: string
    description: string
    buyLink: {
        text: string
        link: string
    }
    disable: boolean
}

export interface ProductProps {
    product: Iproduct
}