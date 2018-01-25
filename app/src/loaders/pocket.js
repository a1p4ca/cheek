import Article from '../article'
import sleep from '../utils'

export default async () => {
    await sleep(1000)
    return [
        Article({
            date: new Date(),
            title: '테스트 링크.',
            url: 'getpocket.com'
        }),
        Article({
            date: new Date(),
            title: '테스트 링크 두번째 입니다.',
            url: 'example.com'
        })
    ]
}
