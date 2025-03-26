import { http, HttpResponse, delay } from 'msw';
const URL = import.meta.env.VITE_BASE_API + import.meta.env.VITE_API_HISTORY;
const historyMockApi = [
    // 로그 조회
    http.get(URL, async () => {
        // await delay(2000);
        return HttpResponse.json({
            result: {
                code: '200',
                message: 'OK',
                total: 524,
                data: [
                    {
                        seq: 524,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-10T09:30:21.670878',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 523,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-08T16:58:43.63977',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 522,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-08T14:57:04.543859',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 521,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-08T11:10:38.207191',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 520,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-08T11:02:40.329398',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 519,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-10-08T10:52:58.172641',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 518,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-10-08T10:37:48.547572',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 517,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '0:0:0:0:0:0:0:1',
                        comment: null,
                        regDate: '2024-10-08T10:34:40.270005',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 516,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-10-08T10:08:37.696211',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 515,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-07T12:23:11.425525',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 514,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-07T12:22:17.66817',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 513,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-07T12:18:02.984436',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 512,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-07T12:17:48.246224',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 511,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-10-07T09:44:15.08383',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 510,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-10-07T09:39:53.717786',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 509,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.69',
                        comment: null,
                        regDate: '2024-10-07T08:57:49.495098',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 508,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-10-07T08:26:12.552014',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 507,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-10-04T14:56:40.882794',
                        mid: 'test',
                        mname: 'test',
                    },
                    {
                        seq: 506,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-10-04T14:53:51.736294',
                        mid: 'test',
                        mname: 'test',
                    },
                    {
                        seq: 505,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-10-02T15:36:52.477923',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 504,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-10-02T14:46:00.006591',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 503,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:22:49.707329',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 502,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:14:59.115468',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 501,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:12:30.741683',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 500,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:12:13.15835',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 499,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:08:31.976138',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 498,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T10:08:25.168406',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 497,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:44:14.997238',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 496,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:43:59.958541',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 495,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:43:20.105124',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 494,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:43:05.674494',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 493,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:41:42.186809',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 492,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:41:20.12273',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 491,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:27:29.277083',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 490,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:16:10.281479',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 489,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:14:16.840605',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 488,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T09:03:48.919481',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 487,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:58:52.248209',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 486,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:56:10.681576',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 485,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:55:49.363224',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 484,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:53:52.634724',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 483,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:52:24.122837',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 482,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:49:06.890494',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 481,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-10-02T08:46:27.278363',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 480,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-30T09:52:21.151407',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 479,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-30T08:53:12.264003',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 478,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-30T08:53:03.583588',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 477,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-30T08:44:10.949904',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 476,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-09-30T08:38:44.353604',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 475,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-09-30T08:18:08.997279',
                        mid: 'test',
                        mname: 'test',
                    },
                    {
                        seq: 474,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-09-27T17:30:36.446161',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 473,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '0:0:0:0:0:0:0:1',
                        comment: null,
                        regDate: '2024-09-27T17:22:06.640714',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 472,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-09-27T16:54:36.056755',
                        mid: 'test',
                        mname: 'test',
                    },
                    {
                        seq: 471,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-09-27T15:09:30.991925',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 470,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-27T13:14:30.938736',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 469,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-27T11:23:17.485962',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 468,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-09-27T10:45:08.308049',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 467,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-27T10:21:39.148375',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 466,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-27T09:18:37.587608',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 465,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-27T09:17:55.493113',
                        mid: 'test',
                        mname: 'test',
                    },
                    {
                        seq: 464,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-27T09:17:42.077051',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 463,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-09-26T17:11:50.839094',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 462,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T17:10:44.351025',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 461,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T16:30:54.026896',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 460,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T16:30:42.606913',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 459,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-09-26T15:54:23.928671',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 458,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.70',
                        comment: null,
                        regDate: '2024-09-26T15:54:22.857076',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 457,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-09-26T15:31:14.395016',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 456,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-09-26T15:31:00.077261',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 455,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-09-26T15:30:52.448872',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 454,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.68',
                        comment: null,
                        regDate: '2024-09-26T15:30:45.213311',
                        mid: 'hong',
                        mname: '승재',
                    },
                    {
                        seq: 453,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T14:57:35.999287',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 452,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T14:57:20.885708',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 451,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.87',
                        comment: null,
                        regDate: '2024-09-26T09:53:02.637763',
                        mid: 'fe2',
                        mname: '이효성',
                    },
                    {
                        seq: 450,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-26T09:51:23.457527',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 449,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-25T18:01:07.198251',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 448,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T17:00:18.418823',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 447,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:59:49.631351',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 446,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:59:31.953399',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 445,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:58:42.838986',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 444,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:57:12.237399',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 443,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:55:41.250756',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 442,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:55:23.344282',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 441,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:54:17.156461',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 440,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:53:27.484794',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 439,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-25T16:47:43.019231',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 438,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.89',
                        comment: null,
                        regDate: '2024-09-25T16:47:02.485843',
                        mid: 'hiyoon',
                        mname: '윤혜인',
                    },
                    {
                        seq: 437,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:32:55.149725',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 436,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:12:52.812638',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 435,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:05:59.628362',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 434,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:05:56.821118',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 433,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:03:22.440268',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 432,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:03:19.287277',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 431,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:01:56.053458',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 430,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:01:52.681462',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 429,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T16:01:45.923709',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 428,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.86',
                        comment: null,
                        regDate: '2024-09-25T16:00:35.419328',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 427,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T15:53:39.483076',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 426,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T15:53:36.824794',
                        mid: 'fe',
                        mname: '이창환',
                    },
                    {
                        seq: 425,
                        sysName: '관리자',
                        authName: '관리자 권한',
                        ip: '192.168.1.88',
                        comment: null,
                        regDate: '2024-09-25T15:50:37.942418',
                        mid: 'fe',
                        mname: '이창환',
                    },
                ],
            },
        });
    }),
];

export { historyMockApi };
