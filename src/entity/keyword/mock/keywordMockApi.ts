import { http, HttpResponse } from 'msw';
const KEYWORD = import.meta.env.VITE_BASE_API + import.meta.env.VITE_API_KEYWORD;
const KEYWORD_EXCLUSION = import.meta.env.VITE_BASE_API + import.meta.env.VITE_API_KEYWORD_EXKEYWORD;
const KEYWORD_CATEGORY = import.meta.env.VITE_BASE_API + import.meta.env.VITE_API_KEYWORD_CATEGORY;
const KEYWORD_OPTIONS = import.meta.env.VITE_BASE_API + import.meta.env.VITE_API_KEYWORD_OPTIONS;
const keywordMockApi = [
    // 카테고리 조회
    http.get(KEYWORD_CATEGORY, async () => {
        // await delay(2000);
        return HttpResponse.json({
            result: {
                code: '200',
                message: 'OK',
                total: 2,
                data: [
                    {
                        seq: 122,
                        keywordType: 0,
                        keyword: '카테고리1',
                        state: 'Y',
                        children: [
                            {
                                seq: 123,
                                keywordType: 0,
                                keyword: '테스트1',
                                state: 'Y',
                                children: [
                                    {
                                        seq: 125,
                                        keywordType: 0,
                                        keyword: '아이템1',
                                        state: 'Y',
                                        children: [
                                            {
                                                seq: 164,
                                                keywordType: 0,
                                                keyword: '테스팅',
                                                state: 'Y',
                                                pseq: 125,
                                            },
                                        ],
                                        pseq: 123,
                                    },
                                ],
                                pseq: 122,
                            },
                            {
                                seq: 124,
                                keywordType: 0,
                                keyword: '테스트2',
                                state: 'Y',
                                pseq: 122,
                            },
                        ],
                        pseq: 0,
                    },
                    {
                        seq: 139,
                        keywordType: 0,
                        keyword: '아무거나',
                        state: 'Y',
                        pseq: 0,
                    },
                ],
            },
        });
    }),

    // 카테고리 등록
    http.post(KEYWORD_CATEGORY, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 카테고리 수정
    http.put(KEYWORD_CATEGORY, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 카테고리 삭제
    http.delete(KEYWORD_CATEGORY, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 키워드&제외 키워드 조회
    http.get(KEYWORD, async () => {
        // await delay(2000);
        return HttpResponse.json({
            result: {
                code: '200',
                message: 'OK',
                total: 6,
                data: [
                    {
                        seq: 162,
                        keywordType: 1,
                        keyword: '123123',
                        optionName: '키워드옵션',
                        opSeq: 1,
                        state: 'Y',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [1, 2, 3, 4, 5],
                        regDate: '2024-12-09T13:51:40.588839',
                        children: [
                            {
                                seq: 163,
                                keywordType: 2,
                                keyword: '123123',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-12-09T13:51:40.604661',
                                mname: '이창환',
                                pseq: 162,
                            },
                        ],
                        mname: '이창환',
                    },
                    {
                        seq: 160,
                        keywordType: 1,
                        keyword: '123123',
                        optionName: '키워드옵션',
                        opSeq: 1,
                        state: 'Y',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [1, 2, 3, 4, 5],
                        regDate: '2024-12-09T13:50:42.551868',
                        children: [
                            {
                                seq: 161,
                                keywordType: 2,
                                keyword: '123123',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-12-09T13:50:42.565152',
                                mname: '이창환',
                                pseq: 160,
                            },
                        ],
                        mname: '이창환',
                    },
                    {
                        seq: 140,
                        keywordType: 1,
                        keyword: '아무거나키워드',
                        optionName: '키워드옵션2',
                        opSeq: 4,
                        state: 'Y',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 2,
                        specialCheck: 2,
                        sgSeqs: [2],
                        regDate: '2024-11-18T13:34:22.72064',
                        children: [
                            {
                                seq: 145,
                                keywordType: 2,
                                keyword: '사이다',
                                optionName: '제외옵션1',
                                opSeq: 10,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 4,
                                specialCheck: 2,
                                regDate: '2024-11-18T13:34:22.765886',
                                mname: '이창환',
                                pseq: 140,
                            },
                            {
                                seq: 144,
                                keywordType: 2,
                                keyword: '콜라',
                                optionName: '제외옵션1',
                                opSeq: 10,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 4,
                                specialCheck: 2,
                                regDate: '2024-11-18T13:34:22.756459',
                                mname: '이창환',
                                pseq: 140,
                            },
                            {
                                seq: 143,
                                keywordType: 2,
                                keyword: '과자',
                                optionName: '제외옵션1',
                                opSeq: 10,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 4,
                                specialCheck: 2,
                                regDate: '2024-11-18T13:34:22.749017',
                                mname: '이창환',
                                pseq: 140,
                            },
                            {
                                seq: 142,
                                keywordType: 2,
                                keyword: '빵',
                                optionName: '제외옵션1',
                                opSeq: 10,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 4,
                                specialCheck: 2,
                                regDate: '2024-11-18T13:34:22.741582',
                                mname: '이창환',
                                pseq: 140,
                            },
                            {
                                seq: 141,
                                keywordType: 2,
                                keyword: '밥',
                                optionName: '제외옵션1',
                                opSeq: 10,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 4,
                                specialCheck: 2,
                                regDate: '2024-11-18T13:34:22.73438',
                                mname: '이창환',
                                pseq: 140,
                            },
                        ],
                        mname: '이창환',
                        pseq: 139,
                    },
                    {
                        seq: 134,
                        keywordType: 1,
                        keyword: '키워드123',
                        optionName: '테스트옵션',
                        opSeq: 3,
                        state: 'Y',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [2, 3, 4, 5],
                        regDate: '2024-11-18T13:30:25.530985',
                        children: [
                            {
                                seq: 138,
                                keywordType: 2,
                                keyword: 'item',
                                optionName: '제외키워드',
                                opSeq: 5,
                                state: 'Y',
                                op: 1,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 1,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:30:25.566863',
                                mname: '이창환',
                                pseq: 134,
                            },
                            {
                                seq: 137,
                                keywordType: 2,
                                keyword: 'test',
                                optionName: '제외키워드',
                                opSeq: 5,
                                state: 'Y',
                                op: 1,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 1,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:30:25.560108',
                                mname: '이창환',
                                pseq: 134,
                            },
                            {
                                seq: 136,
                                keywordType: 2,
                                keyword: '1234',
                                optionName: '제외키워드',
                                opSeq: 5,
                                state: 'Y',
                                op: 1,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 1,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:30:25.553031',
                                mname: '이창환',
                                pseq: 134,
                            },
                            {
                                seq: 135,
                                keywordType: 2,
                                keyword: '제외',
                                optionName: '제외키워드',
                                opSeq: 5,
                                state: 'Y',
                                op: 1,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 1,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:30:25.545506',
                                mname: '이창환',
                                pseq: 134,
                            },
                        ],
                        mname: '이창환',
                        pseq: 125,
                    },
                    {
                        seq: 126,
                        keywordType: 1,
                        keyword: '키워드테스트1',
                        optionName: '키워드1',
                        opSeq: 7,
                        state: 'Y',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [2, 3, 4, 6, 7, 8, 5],
                        regDate: '2024-11-18T13:27:38.804685',
                        children: [
                            {
                                seq: 133,
                                keywordType: 2,
                                keyword: '제외추가',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:28:01.274679',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 132,
                                keywordType: 2,
                                keyword: '라마바',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.846072',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 131,
                                keywordType: 2,
                                keyword: '가나다',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.839973',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 130,
                                keywordType: 2,
                                keyword: '또잉',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.832348',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 129,
                                keywordType: 2,
                                keyword: '오잉',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.827082',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 128,
                                keywordType: 2,
                                keyword: '1234',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.8219',
                                mname: '이창환',
                                pseq: 126,
                            },
                            {
                                seq: 127,
                                keywordType: 2,
                                keyword: '제외',
                                optionName: '1234',
                                opSeq: 11,
                                state: 'Y',
                                op: 3,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 3,
                                specialCheck: 1,
                                regDate: '2024-11-18T13:27:38.816458',
                                mname: '이창환',
                                pseq: 126,
                            },
                        ],
                        mname: '이창환',
                        pseq: 124,
                    },
                    {
                        seq: 24,
                        keywordType: 1,
                        keyword: '키워드1',
                        optionName: '키워드옵션',
                        opSeq: 1,
                        state: 'Y',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [1, 2, 3, 4, 5],
                        regDate: '2024-10-28T14:19:15.11367',
                        children: [
                            {
                                seq: 87,
                                keywordType: 2,
                                keyword: '제외테스트!!!',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-11-15T11:01:33.779055',
                                mname: '승재',
                                pseq: 24,
                            },
                            {
                                seq: 28,
                                keywordType: 2,
                                keyword: '제외키워드3',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'Y',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-10-28T14:19:15.156411',
                                mname: 'system',
                                pseq: 24,
                            },
                            {
                                seq: 26,
                                keywordType: 2,
                                keyword: '제외키워드1',
                                optionName: '제외키워드옵션',
                                opSeq: 2,
                                state: 'N',
                                op: 2,
                                leftLength: 15,
                                rightLength: 15,
                                filterType: 2,
                                specialCheck: 1,
                                regDate: '2024-10-28T14:19:15.140504',
                                mname: 'system',
                                pseq: 24,
                            },
                        ],
                        mname: 'hong',
                        pseq: 2,
                    },
                ],
            },
        });
    }),

    // 키워드&제외 키워드 등록
    http.post(KEYWORD, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 제외 키워드  등록
    http.post(KEYWORD_EXCLUSION, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 키워드&제외 키워드 수정
    http.put(KEYWORD, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 키워드&제외 키워드 삭제
    http.delete(KEYWORD, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),

    // 키워드&제외 키워드 옵션 조회
    http.get(KEYWORD_OPTIONS, async () => {
        // await delay(2000);
        return HttpResponse.json({
            result: {
                code: '200',
                message: 'OK',
                total: 13,
                data: [
                    {
                        seq: 1,
                        keywordType: 1,
                        name: '키워드옵션',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [1, 2, 3, 4, 5],
                        state: 'Y',
                        regDate: '2024-10-28T13:33:19.253862',
                        mseq: 0,
                        mname: 'system',
                    },
                    {
                        seq: 2,
                        keywordType: 2,
                        name: '제외키워드옵션',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 2,
                        specialCheck: 1,
                        state: 'Y',
                        regDate: '2024-10-28T13:33:19.253862',
                        mseq: 0,
                        mname: 'system',
                    },
                    {
                        seq: 3,
                        keywordType: 1,
                        name: '테스트옵션',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [2, 3, 4, 5],
                        state: 'Y',
                        regDate: '2024-11-12T15:59:09.506982',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 4,
                        keywordType: 1,
                        name: '키워드옵션2',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 2,
                        specialCheck: 2,
                        sgSeqs: [2],
                        state: 'Y',
                        regDate: '2024-11-12T15:59:42.307743',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 5,
                        keywordType: 2,
                        name: '제외키워드',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        state: 'Y',
                        regDate: '2024-11-12T16:01:14.944426',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 6,
                        keywordType: 2,
                        name: '테스트2',
                        op: 3,
                        leftLength: 10,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        state: 'Y',
                        regDate: '2024-11-12T16:02:58.689801',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 7,
                        keywordType: 1,
                        name: '키워드1',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 1,
                        specialCheck: 1,
                        sgSeqs: [2, 3, 4, 6, 7, 8, 5],
                        state: 'Y',
                        regDate: '2024-11-12T16:03:40.623665',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 8,
                        keywordType: 2,
                        name: '111',
                        op: 3,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 2,
                        specialCheck: 2,
                        state: 'Y',
                        regDate: '2024-11-14T09:27:08.712676',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 9,
                        keywordType: 2,
                        name: '제외옵션',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 5,
                        specialCheck: 2,
                        state: 'Y',
                        regDate: '2024-11-14T11:22:56.678626',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 10,
                        keywordType: 2,
                        name: '제외옵션1',
                        op: 2,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 4,
                        specialCheck: 2,
                        state: 'Y',
                        regDate: '2024-11-14T11:23:17.664848',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 11,
                        keywordType: 2,
                        name: '1234',
                        op: 3,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 3,
                        specialCheck: 1,
                        state: 'Y',
                        regDate: '2024-11-14T11:23:39.129346',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 12,
                        keywordType: 2,
                        name: '옵션2',
                        op: 3,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 4,
                        specialCheck: 1,
                        state: 'Y',
                        regDate: '2024-11-18T16:20:20.137129',
                        mseq: 116,
                        mname: '이창환',
                    },
                    {
                        seq: 13,
                        keywordType: 2,
                        name: '옵션24',
                        op: 1,
                        leftLength: 15,
                        rightLength: 15,
                        filterType: 3,
                        specialCheck: 2,
                        state: 'Y',
                        regDate: '2024-11-18T16:21:32.689572',
                        mseq: 116,
                        mname: '이창환',
                    },
                ],
            },
        });
    }),

    // 키워드&제외 키워드 옵션 등록
    http.post(KEYWORD_OPTIONS, async () => {
        // await delay(2000);
        return new HttpResponse(null, {
            status: 200,
        });
    }),
];

export { keywordMockApi };
