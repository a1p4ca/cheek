import Article from '../article'
import {sleep} from '../utils'

export default async () => {
    await sleep(1000)
    return [
        Article({
            date: new Date(),
            title: '테스트 문서입니다.',
            url: 'naver.com'
        }),
        Article({
            date: new Date(),
            title: '테스트 문서 두번째입니다.',
            url: 'google.com'
        })
    ]
}
