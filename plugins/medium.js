import Article from '../app/src/plugin/article'

export default async () => {
    return [
        Article({
                date: new Date(),
                title: '',
                url: '',
                imageUrl: ''
        })
    ]
}
