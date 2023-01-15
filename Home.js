const jogos = [{
    id: 1,
    name: "JJBA eyes of heaven",
    ano: 2015,
    img: "https://www.bing.com/th?id=AMMS_0f2cb170d8c6a2d3ea9db10ec6ae0165&w=165&h=183&c=8&rs=1&o=5&pid=3.1&rm=2",
    link: "https://www.bing.com/aclick?ld=e8F4GOR7G39P__JALuvqr2vzVUCUxQKuMeZ7PVgM0qhNYtqU_p_qm45f7JHi5pBAKTNRQem63P213YIt9GhKOnVZobnPopf0DNL3hwVgp51KccNf-8pR2l2A1mIgTWwQW9oy-NGLY-G72_9JDxAFrxVAIit2f-VqZiKkkQn_h98TAQfnr7&u=aHR0cHMlM2ElMmYlMmZwcm9kdXRvLm1lcmNhZG9saXZyZS5jb20uYnIlMmZNTEItMzExMjQ5Mjc3My1qb2pvcy1iaXphcnJlLWFkdmVudHVyZS1leWVzLW9mLWhlYXZlbi1wczQtX0pNJTNmbWF0dF90b29sJTNkOTIzMDkzMzUlMjZtYXR0X3dvcmQlM2QlMjZtYXR0X3NvdXJjZSUzZGJpbmclMjZtYXR0X2NhbXBhaWduJTNkTUxCX01MX0JJTkdfQU9fSE9NRSUyNTIwJTI1MjYlMjUyMElORFVTVFJZLUFMTC1BTExfWF9QTEFfQUxMQl9UWFNfQUxMJTI2bWF0dF9jYW1wYWlnbl9pZCUzZDM4Mjg1ODI5OCUyNm1hdHRfYWRfZ3JvdXAlM2RIT01FJTI1MjAlMjUyNiUyNTIwSU5EVVNUUlklMjZtYXR0X21hdGNoX3R5cGUlM2RlJTI2bWF0dF9uZXR3b3JrJTNkbyUyNm1hdHRfZGV2aWNlJTNkYyUyNm1hdHRfa2V5d29yZCUzZGRlZmF1bHQlMjZtc2Nsa2lkJTNkODU0ZDExODBmMTIwMTdmZDIwOGU3MjQzMTJiNDMwNDklMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RNTEJfTUxfQklOR19BT19IT01FJTI1MjAlMjUyNiUyNTIwSU5EVVNUUlktQUxMLUFMTF9YX1BMQV9BTExCX1RYU19BTEwlMjZ1dG1fdGVybSUzZDQ1NzkwNTM2MTc1MjI0ODIlMjZ1dG1fY29udGVudCUzZEhPTUUlMjUyMCUyNTI2JTI1MjBJTkRVU1RSWQ&rlid=854d1180f12017fd208e724312b43049"


},
{
    id: 2,
    name: "JJBA battle ALL-Stars",
    ano: 2013,
    img: "https://th.bing.com/th?id=OP.X5tKtDwPXzJRCA474C474&w=300&h=300&o=5&pid=21.1",
    link: "https://www.bing.com/aclick?ld=e8-ZsM8GhQdVR-LeyjKgE84DVUCUxO1w_h5pf_KApfy6Bvt60EMiG4UCQ_Clczp2iCr_sE80NRzBt1oH5rX62CRfpnKBqclYPoFbh7Esp7pQS8Ng_GL5mOCqspSNyICWLaht49iqdVynX26Wl6nuLaSQHvVzYOnELhMC81-JTjxJi8Guq3&u=aHR0cHMlM2ElMmYlMmZ3d3cubWVyY2Fkb2xpdnJlLmNvbS5iciUyZmpvam9zLWJpemFycmUtYWR2ZW50dXJlLWFsbC1zdGFyLWJhdHRsZS1yLXN0YW5kYXJkLWVkaXRpb24tYmFuZGFpLW5hbWNvLXBzNS1maXNpY28lMmZwJTJmTUxCMTk2MDkzMzMlM2ZtYXR0X3Rvb2wlM2QxNDIxMzQ0NyUyNm1hdHRfd29yZCUzZCUyNm1hdHRfc291cmNlJTNkYmluZyUyNm1hdHRfY2FtcGFpZ24lM2RNTEJfTUxfQklOR19BT19DRS1BTEwtQUxMX1hfUExBX0FMTEJfVFhTX0FMTCUyNm1hdHRfY2FtcGFpZ25faWQlM2QzODI4NTgyOTUlMjZtYXR0X2FkX2dyb3VwJTNkQ0UlMjZtYXR0X21hdGNoX3R5cGUlM2RlJTI2bWF0dF9uZXR3b3JrJTNkbyUyNm1hdHRfZGV2aWNlJTNkYyUyNm1hdHRfa2V5d29yZCUzZGRlZmF1bHQlMjZtc2Nsa2lkJTNkMzBmYWVlYzI4ZmFjMTNlZTlmMDI4ZDAxNmM3MDBjMmYlMjZ1dG1fc291cmNlJTNkYmluZyUyNnV0bV9tZWRpdW0lM2RjcGMlMjZ1dG1fY2FtcGFpZ24lM2RNTEJfTUxfQklOR19BT19DRS1BTEwtQUxMX1hfUExBX0FMTEJfVFhTX0FMTCUyNnV0bV90ZXJtJTNkNDU3OTM5NzIxNTgzMTEwNyUyNnV0bV9jb250ZW50JTNkQ0U&rlid=30faeec28fac13ee9f028d016c700c2f"
}
]
function Home(){
    return (
    <>
    {
        jogos.map((jogo) => {
            return <Homepage key={jogo.id} {...jogo} />
        })
    
    }
    </>
    )
}

function Homepage(props){
    const { img, link, ano, name} = props;
    return (
        <div>
            <ul>
                <li>
                    <a href={link}>
                        <img src={img}></img>
                        <span>{name}</span>
                        <span>Ano: {ano}</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Home;