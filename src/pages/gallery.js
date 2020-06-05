import React from "react"
//import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = () => {
  // // Dynamic images by callingg glith.me api to get list of images
  // const [images, setImages] = React.useState(null)
  // React.useEffect(() => {
  //     let shouldCancel = false
  //     const call = async () => {
  //         const response = await axios.get(
  //             'https://google-photos-album-demo.glitch.me/8d4dwVxsNDPbEjtc8'
  //         );
  //         if (!shouldCancel && response.data && response.data.length > 0) {
  //             setImages(response.data.map(url => ({
  //                 original: `${url}=w1024`,
  //                 thumbnail: `${url}=w100`
  //             })))
  //         }
  //     }
  //     call()
  //     return () => shouldCancel = true
  // }, [])
  // return images ?
  // <Layout><p>Gallery of my Mobile Photography hobby, mostly shot on iPhone or Lumix DMC-LX10</p>
  // <ImageGallery items={images} /></Layout>
  // : null

  // // Static images links, much faster
  // const images = [
  //     {
  //         original: 'https://picsum.photos/id/1018/1000/600/',
  //         thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //     },
  //     {
  //         original: 'https://picsum.photos/id/1015/1000/600/',
  //         thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //     },
  //     {
  //         original: 'https://picsum.photos/id/1019/1000/600/',
  //         thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //     },
  // ]

  // // Manual static images google album, TODO: generate response array periodically

  // Source: https://google-photos-album-demo.glitch.me/8d4dwVxsNDPbEjtc8
  // const response = [
  //   "https://lh3.googleusercontent.com/W9oP6z_fAFgZqZw5Yy_GT5wcASRUazsTfsNCHotCIpZomBptCGAr0yS4iCmKHDHs63z1U3MEMFbMMvgTmvYwPHvrcJwIqR82i6x4nm26AAgBGw-86KWUyvgadDpbhpu4KE_Iw0HwfI4",
  //   "https://lh3.googleusercontent.com/QbBvRpIRSILBTcjuvalGw8rfaKKGqDcvxix063khb_AuRzmHBs52ScgKaUsZNeLeHmTHQIISkW7tfN69CeqcGNB7WMyM2YL0tfT7Qir9p2ym9NLFSZ8n6YhqnZ_jWruE9rkvTXIE8BM",
  //   "https://lh3.googleusercontent.com/GQxs9j7Go17sqvkPuetQy9RRs5lE4S9DeuMG2l8s29qnto9n2z9XplGDH9mXSTUzRMA7ahc_1iuM7YnGplnp0ECR2dLWGW-IcmLFUwAkJ9E3F_6FIzVc2p8H17lh7wJ6h7MWpr1qUUI",
  //   "https://lh3.googleusercontent.com/qGRCprh9xERNQ2-mMH7OdqdFxHArAJHyeYorNSkgI-yacvLPql31xQtN7Ssz7W2fGqG1aJ27ASPlINaBtnD_frnD6VqOw_3YkIIwyStNESCWWRZt-hzgqGJtWAwUVkBT4l5pg7DlpZk",
  //   "https://lh3.googleusercontent.com/Yt-y381q0MYv-a1wgwS0pSnTr7jxUMFNxS1Easm0y_55IxvYdw3kE5UfrZwGKFej7z_yNsUsOjSYoIzi-uxgW0ja71KrneaGje7FpqSDk1md7vw78e5ncrL2QCqBCm1cZbG2SIuUG94",
  //   "https://lh3.googleusercontent.com/J27HC4Vfi6CWgao8hotm0R04gkDuJ-N4u_0zBX0idshetS7i40MuEfrLgBGDTxpPRqbC4x-WIf6Ou4Y91eImvTMm0EWoQex4512xtwSlSUp-Ef0lnI8R_ixKm6ViTwLYL6381Hn2giU",
  //   "https://lh3.googleusercontent.com/ngTcsFepIiaxL96nCDH1YHLnoSv4ZptJ3VFnPZzBezdCyutiWs09iPoUPJgXCxzA0sgYz6BJGrdCOJfmjIi8ghK0xzL4UDyy761C2eCjLmyJ8dCAB0c7hGHmCplTdSlnpSRswIgZzRA",
  //   "https://lh3.googleusercontent.com/40t1isQnMeCoLdbTYrInAjLFGtzigfJKThkileKsGx2-27B8z9Uy94FYmchgeDU3vkinrU2nzb-t9uav3b9oP7OFZZU0Em9xQ92eaE_M6LF4RMX1IH6R0xvUFVM-S9L_lLbUGqK5xxM",
  //   "https://lh3.googleusercontent.com/HflKwyZLKLYUPfNvUN-oMCPvr6dzgZdlVgK2A6Acda5I5HwRPmWHAFnQ6Ml4awkYX_f7x--eCzvMCzxZiCz8fU23tIWgVm9MCDCNS-QX4mWuosthESqCEdnL5KSzGYgkrdNix8JJphM",
  //   "https://lh3.googleusercontent.com/GnwgKhsok9XlJ1CvGcmmyw9_PQt77i7CCO0sLPYt6itNVecCW5LM1Y5n4BtWp00VQo9u3lVrpjBLkggkLsqev8u-35E_fTm6rH8E9x_P9H3bkAJPlHOOSeedL-immm2rMxQr_5NrGso",
  //   "https://lh3.googleusercontent.com/TgLQR_syQzg7qezqD1KEoNucfkkmJYTVq8rIOPD3yNY_juRGo8tzmEK69j9Awgi8Qahxm66L6uJNIGdSmNI093RazCC-0VjnU6RsUSB1juOGe6McRAJiVxkrxlockqXL6_NR3e9eqtQ",
  //   "https://lh3.googleusercontent.com/bmfqn_61Z4jbI2Rlr5oKExeLwDnUmHNiWLIBwjY40K4EvfJr91BRiX8YcDz2UTmp7vEcNEcpzkC74HItJC1gRw7YiucQ1Ia_fdzZQ09hhy-tbzmnoZZVjUPM0F-0aKoMimabDpJkDss",
  //   "https://lh3.googleusercontent.com/c-JftSdRm5OE3tGU8BLqaIh774qkLXMbYr_bbrzwwk1z3pfbxbKuqFvJFfr42OT5fTpYPymqS1B7gssQ1GP96N6OfLA9CClBfoMWgx_lw1nbTqb8573Qo3SRsbyAnKE9ew-w0Fqxzf8",
  //   "https://lh3.googleusercontent.com/TmdKCc6bfob2pKIQ3Oy2RU8Td3kYjCSb6LmibDnl759PYIdMzYCLW2RIOtRyy0qNwp41gF-1c8CvOnb43_SH86VoKERG4ywB9CbPkK9sJDr1EonCYTO4gsjcE4p0gP-5i-Fq9KcVXY8",
  //   "https://lh3.googleusercontent.com/poO8ofPZTjfLDgzNovQvZbutCsuZ5UND--TyQKOAw1_IrLZPfQ3ozNReex0v2KMHB3wmeMMyevV4m1dLv9fnVvNP_xhpZo-7GHnFbPuW5hAvqJRczB-YhNHBwplfPHGuP-WZPaJBmKc",
  //   "https://lh3.googleusercontent.com/OIphNtQEEKAuMvfgjvSXPNVeSGIMf1CEWIkEf3xyZ5PPiOK5sDAcHZvgKPZN0vhYUJvKx1uIjNevFOZA86JYcwdns6dPhYV1OtAtwtP8o-YXVjwK4LD58-SJWU1hHJ4sGCwZWpu_RSA",
  //   "https://lh3.googleusercontent.com/bxSQsu7ja_l5R_w-Q25TbeR7M1Xst9L5VsJ0ruzi-f9JvIsU4_EKv-fMzU5ZCFHjGhJS-FvM1xOAzCZ2xDwLXVI2kBtKzQdIdWCrBsRZ2adlIwvICuwu3pQ_lrk4FfGMcWFjpYedimY",
  //   "https://lh3.googleusercontent.com/ZjuCJnmLoSvkVCJmDgWBnenWh5b4r_VvTNGBW_DnIyrdt28z2MK1qlVW2sDIigAAW6pvIKj98GNHYbRsd_BK32Uh6THJjJ-StVgtcfi9dJVW_E7XTDCUY8D8TZx2Jw8BwbbpRhCKTCs",
  //   "https://lh3.googleusercontent.com/ax4mKmJP4qdP897NXewkPCXSE4mjZKEZV34wn8TxA4X5feMuPuH4X4COepnAew2jqPvhpnsxrXDD3W0sGR_aP7bQ0V66bDWnBTIU2Ch3Htoeabogfw5Z6NW8J6xctoowKkqnaUWQLCY",
  //   "https://lh3.googleusercontent.com/gYFnV1padGFLpUEfzT4IRNzMZA9a0lXCpYDrqYvnskTRAgpK-fKxlhTBQnZLoq-Zcpcx6w7gJleoSHWVDw8fOiaLDgD7c874qEDkXT3WmHZcGdQRLlBDdhi0ajvYq41w-v6bK2gb4Fs",
  //   "https://lh3.googleusercontent.com/Xi_ezzF9HdQj10m46URZ9gS6Z0cJPZ_eIYHa9Kocbx6Us0WRJjyVD-bftkRMTr9XnFVhQtnBNhp7pBXTYIktFUgVgCK0uwLPmhAigciMk83ElC28JupJ6oTq1t4qVYe_KIlzdILlIUE",
  //   "https://lh3.googleusercontent.com/tjEj11Ke9uO_zxKLBr6S8_OqQR8UbRgwOrjHbGkB3MDivUSNyjBituNKbvhXVTcj_mUYcK_tv8HDINqdYyuTVFhzp3IQ5DAGzZGxiLHT8Mdri_XU9yYFVoFnOIKj13pMRgyE9oyE8VY",
  //   "https://lh3.googleusercontent.com/AO3GbwVE5ltpYKvh6nQ4sSVQpjWNqSZ-lcZ1TMWWBaqMiyjTrxBPacFYCurbEt-w_xPbfGR6zwnxh-gGlrnrJOUmX5zcXY1cNzNZ_huV6gmjYotZ1tQZbK6bFkOkjykn4lQFtrpa8Q0",
  //   "https://lh3.googleusercontent.com/Gk-mAHIVVLQoF7V8bwACOcfhHS_J1Ba0g5ZJTPgdhwo0Dlc_eWMLXnHNENUuryZQizSUxI1pGcewKRmTe6nuIVj16n0z70ob7MLVsR7_9pMf1np9zMqwKQoAYm0hj-t5kl5HuDoa26s",
  //   "https://lh3.googleusercontent.com/RmPee3prje7TOcvKzHF4FTUPmlfQUFmHm7PkJf9-Iw--iESYLMsRXBxN1eVDNw7O-suKcwUyJ5vf93uWZ9MxO9tA70qnHEbQGiDzmepc-BNPxma1UPz66G0V4C4KxWfFZvSAn3q8Yjk",
  //   "https://lh3.googleusercontent.com/MOmhFQUsxw-Q1hABIVFpOzOLhkSaTWMFgtk4k4p5L9KfLdnObrHTD915c3E1vadqOAhf6Lexwt2YnlBZ5OP7-7BXn2aK8U9aYRbUe6IbT8VW2oas9r-pjrwLwCFZvLUJtQQ1kg8Fz1U",
  //   "https://lh3.googleusercontent.com/lMYhkdmN8qyHB35MWVBHoDNHc8pPqTv3Iz9sVCnqmjxsyRVBWli-mFQePPealaTDmu7PCyggueeKj4Xg7ggbs3LA7amAc5YcViwaL-cNM3Vvv00v4tg7J6i43lB1qkXaD3-2i5DpSQw",
  //   "https://lh3.googleusercontent.com/6jo3VqahbuF_s8i7qRTse1OmlHGSI3V8UcPOtpMm6g6W5PAIQq5b22lx-ejbRVAmUM0xvvigoPFG3jRc59fFN9X0Das98ZSwpJkyP_OY5MFacVJ3_I_Wg3Ghwc7t7er_Syw_L_VExIk",
  //   "https://lh3.googleusercontent.com/zo2ONq9vxNrlv3wv93hVND88Z08df4SH2fgQ6iMjfwExTVB2grLijXpKj28flSPThEqJCgt3e90UShwVt-ITJ7_5y9stI45gDvD5p5SsCnbYvPfx3JAddk68wBzCZfdkR7X3M7X97oE",
  //   "https://lh3.googleusercontent.com/y-XyvhPWXf14fcDAliToVFUoi8hiaenoZWfcByQWiaIsnwPXP-aoDsU8MjWu87I-VAYPBiek5F4YMr3QDYsoDyBzMgIFzc7c5mXyE-NRbB1uCfkutH__q9Iy_hccvxu655UY1Z4Sw2k",
  //   "https://lh3.googleusercontent.com/9KBFBiAkBYgPPihi4iFiKPNTr9fXAAN8aoCBj_aLk6n9TmuV6a2V-MjhG5PIbZUNDGs6NiIZq1zMV6hmW66UDeG4DtOnZT9acrHJgqSdfKRYQMvZr7XVeiLFAoctCEa1XSzck58Rz30",
  //   "https://lh3.googleusercontent.com/55ePQgLXW4DjTRlkpA88-9CGcCcFukht_VeXD-NQC4SdpgIZ-EkmbwUwoR5IL1jgnks5ofTJkWEeMQH9zxhHqSXkx-pMrm5w0FzClLxqpu0KhqBZdvJqJhpPYJqKhdDlGGKB234MrM4",
  //   "https://lh3.googleusercontent.com/yGjcglx185n9r31p6X8aafa1DeBSOrJ-pBF7VBq7skGQyTcOJ8fVubdmpjqZJBeosEQ9S-AN11KFoETc8DccTfa13go8TI5fNuyKe4n8mMkGtm7y3N1PxrawoP7JKJkkI1JiVw7RZ_8",
  //   "https://lh3.googleusercontent.com/K0Tyzh2YoIURxZVIfjMH8sgNHvCml2zndOV4If_YxVSg7Z4kfTZVD8VzSCzWuFKbuMSq6gwQ7sz1NPrC-9aHA3loncZjBJ9aTeK_U5EBgnBdLYREV8fuVY-FhnVn0uK4odT1SasO828",
  //   "https://lh3.googleusercontent.com/ABH8cV3CwmbQCyzBXuagfl7CeCLM8u4sAMEVWQYMJ2ldau6rlbDJaP4od_I_tGsjrX6EcUAEBdWpN1y1-GU2GJ5Dd0jS9JqkvMxOD2jR-gDQw1SwJcEXOEvqkQiKdwZzNltUgzVNKtU",
  //   "https://lh3.googleusercontent.com/l1oqkHApAtCMLaUED_JUhx5qLuLB_cbbwcdUXBARPFTj7b9lCBl6pCPDhvNQt1ue4BlEZACcr2kD4K-a2Y0GymT8bqF6dnOKoPJp0gkkuySKsZ5JqHW3ys_Rf0Vez1nhbJZm0Ec5y2w",
  //   "https://lh3.googleusercontent.com/J_MYn3SsCvJPl7PAV5Xx7nJL1_YVApDvTsr3Ix2yZb1ss4h5Bp64zq0Zmb3KfEhV-AwR5Dfua7pdxLJ6DWwEWise4ry8aWu5iwJ1TLXD0gmIRV4V1P-xEUfSAZbz2BMj-eysc0BbdCg",
  //   "https://lh3.googleusercontent.com/HxL7S-n8QlkWahlScWazbZjogIn6qaVN8GYjkNOfQ2WsRKFs5RribTk3BQ_mV18tsw7tMdU8wlXC5hBoIg-csD71tgYxHzmMFqXm79NZYcjE6XtLFpTZWu2Sca-LV6ZSf2uyO915ZF8",
  //   "https://lh3.googleusercontent.com/9gW6svJk69wVBlHcHIAxIXm0YnO6J5UypeWV1k4YJ4sukQftZwS9axMNgAW8MVZCXtOOA6e9QQhHjYxzA9-taJjAp9SL5tbqZJcKBblqOJ4kaB2ZoqEe5vp8UBQOvC8AblCdm-bhcgg",
  //   "https://lh3.googleusercontent.com/rrsI47m6QZRbb62T39HySHMO6qhniw4eSYiPGkNTl0UJZAtAnVSr_nwW3kdz_B005vAOuPUrLYIQyyRe6q3tavEvF-kAEQENb944EZzCAJa90yTE3T20xBaB42LxrxrFVcK7SfeKq1g",
  //   "https://lh3.googleusercontent.com/hCszqThztYoPiipID3qY5dejhXXW1MHAWEeZRnWvr9I1bYoPBcyRe2wnleTYrQLhkBtlD0elbPo6EyFQW4rtXrEspWCag3xqVkf3RpAfi_6vIhv51Vb-0_pPY6gLzt1qcxmSI_zbV1Q",
  //   "https://lh3.googleusercontent.com/eKKUkLmcYAow0NYSMpTDlhQt1iHiYrEaDBGuQcnksssuG9t4Gt5PuptmHmtCxZiZuQEkSMSULI8E0JAripp_MjOZKnO1Q4ZkvHyjm-wv126DNxMIHolhJBJbPMB7k7tfFvcZN31iMso",
  //   "https://lh3.googleusercontent.com/Fl3Rhb_EqjpqqTbNHgHiNQ32kVZrjjxnjCVH4anJWVvLIOjC4wRqF0uPBvHldKXG2xrLNU8eJXbCulggAhWSufukWD7yvYKEGJiszhvy0nkHYY5dkSAhU1KZCQlibVsAJDo6XkD_BIc",
  //   "https://lh3.googleusercontent.com/cg_-E_sK8cmLSiFnnz8-KBKQA_AL8zLiarsSMUwVBlNQ7uly9KRO0wI4Fpxvl2ZvdGpPfCx2dK1bM3D_ZpqMLfOB0NM1toZMSKCV4eCpxPq25gjMt_wwgA92-F0nc3ckLe7uDHmAO9Y",
  //   "https://lh3.googleusercontent.com/NZC8n0rR75y9XY6jGoCMkW4rVxgukxIg6fedpimtOFn3Ll-HbmCj9DYSjGsZ3ZMEA8ihwM1CUMKklWBtqrJ2fO-kMU0BgpiMWo--3HWRFlZU-XkQ9zLWwk8wO8YvQnlUeLlPpiguZpE",
  //   "https://lh3.googleusercontent.com/FbCMJt1FFHmCV-AygWpwZhukvHJm0XuL-F6STjV_c6B5U4vYQrhYTW7dpVHyJyEZrTW-0HJ15-Lk5MOM4pe7rVa_3HDuO8S5OGvG1QZbznLOOoIa-IwKvqNYgaqauGuA7L1HzCIpbUU",
  //   "https://lh3.googleusercontent.com/jE1SsND68i0Kp8gr6YeN5CNpEjJkocqV3dsbxiZ0rFL22jpHlHTrvNf-zBaRCEywIrNZcHAyZSyEjucLiSuz2ChYnPI-cAyT6IghdwVRry14uVLGVk6ivlYZ-frYQLokrou13aWMJQo",
  //   "https://lh3.googleusercontent.com/GaidwyQBZ2dKDEXsepeLy61MIg4Wx06rwT4pX7cBioKz0LsYIZuWoKPvISxV7vlt0kr30ihonU2z-ifLRa0FNV9lyq5h8nLXHSb3rr058-T86jrQ9O6xUl0Rn88xAwgZjCsaD1IjDno",
  //   "https://lh3.googleusercontent.com/uope-3TqwC3fgXfMgWXMwJVABD2TedQl7kKbZwV1IfTKp2Rde73Yo2UYEHN5-3hfjYXDVrYbRBmSA6q7z-OSX8XfbDGwpronboDwKZsYkF21OIqmnvjCM6RnWFqLzhEFw5mci8QpUrc",
  //   "https://lh3.googleusercontent.com/VRHJzEgwSVr2ZoWk50Sm-inFarlkXKEKGwMGrl7ged8qIoRiBS77dkqgNfaUTbkBwSsa3GjfMnHXbaoRvr5LG7F7c6GaLW15vyqVdSp0agn8UQmodI9xlHqgIdjSIwUK2fZc-fVDR1A",
  //   "https://lh3.googleusercontent.com/M1-HdRyH0cOLc44KcvTeZHIA9FCFBJQ__YfT1YvP7OfwJXVs8I3crAquwxfVyKNAL6QyPu-GokcXTj-sJAJzL-J9zH8WK_QFgdFA1RZnVAOn35wdKz_CywW4I24BCCe80k8gulaWKsY",
  //   "https://lh3.googleusercontent.com/NfKb11tUJkIRxjZkg0RBEuNbF1xPA2UOnuFjQD7godIh4noV7QV-R985ZVbrr7pxuYrw2ueADwF1AbEUmZNKICCv-yKfJ5wkAQO7IaGW8CPOfwa3gsTppgf-cU8mvrZKr7ULBooQUQA",
  //   "https://lh3.googleusercontent.com/-AUeGPJIx-Us1qobc42cF_HDEtOkJMsgX6c-wm5wgTp_h5gl7RvLk1mxrFpDrv9arD-Kg6WYzWOd5Z8ts8I2eBkbj5xP3lJZhpbSZeJheC-KmPR18R0d8GUYvkS0uFwb_pPUgzgx-9Q",
  //   "https://lh3.googleusercontent.com/iNPEBVSy7ILA-fM1DlRfUkvmtwtmBBiC3O7O7_PXOUlMaWbozGY0K11WauknrGMEq7xSYpqqMwdVSo5mdHzpKuClVmZtwAxNIPaaEANAxWdfG3tl2rOfnSSKud7hkIh7ik3tusBqL3k",
  //   "https://lh3.googleusercontent.com/aCD3Pxe-C9JPwR6bMCqoj9hndv8JlcD3zAZJwZ-7b1CC8Gy2-PinW_nQhHV3e7OCLVO7sD7wRWcNr8GqqGE31Y0zvksNrrhZ27wmkc5AVllHojlYVobp9AmSUTUhhoSzMI8ZKO0idH0",
  //   "https://lh3.googleusercontent.com/ZpKCCusmVHr1_Dl9oONWV-8wIV-pYuizexVUYmsRGBAEZtuGq6O768yMJ8H6YDPStfQALoK51od1O_ZrPRTYNE-T_ANvcYe2w4NfGTLU5lUCNMKGKUbRhyWhKvnw7dkp0YBdJ7mehEA",
  //   "https://lh3.googleusercontent.com/3AxJmqZppO5ZftUKji0zj_-jVEAM9HSKGj_lCkf57WfB8_AmxOO57uFSAWreBSQ2qy0AHbZ0B0Fq86QsWzpU85gOWwUKGkCdO1nwVJnvdiEJ_SiLhijjEbx0PIUvi4IUHVgSY-6h34k",
  //   "https://lh3.googleusercontent.com/mVcJvXkme0yWg1Q142NKdMuNqBAJoh5TXQNdsCVPVGWh3kwWgvlvMxtEf1Xop0_d16I6gwGHvtNrr_7KNtBYA2RX-Rw7S1YtcZWOozlbt_7JdRqSqNlPrj4GfCrW92OKfzf2fpySlF4",
  //   "https://lh3.googleusercontent.com/Gzd4Iw28GXc5t-5571WTyjQlnsyRL9_XnDHpLBH8YxqL4IM1yY2cZ3yTtiBO-LxRwMb2w-NgN_71Tyws2WjedpryQ4Cirz1ZwndVFi5R7QWHeGb_KzCC5yUtvNTpQQTQYpA16OoyOOg",
  //   "https://lh3.googleusercontent.com/bb5UwrYF7flo_F7t7LocqjbxDiSkCVNxbqvS7868_T9uyol1Y-wt2ZzA6XrWLcfUBYz3nSqKG-D_zx-VgQQg1w5bdw9GcHiy1s0UdA3C4fy9Z_xgbXMlDXyWteod15y4gfxnxy2xWKw",
  //   "https://lh3.googleusercontent.com/VL9NJLB1Eq3vP6kEmyIP0dWmOniCqFA27wQ4T_FQuay0pYtt_wNrufTkxRGGMukSaxI2XZH76NsoTaznHgDKx_zHjYChUb_RQ0HYmT_VIzkb7YfbJML5b9ZFp4AT15Ir1q-SaUMSeUA",
  //   "https://lh3.googleusercontent.com/p99u83QRdMMnZ8vYKoCWTRLOPm2goMeOL7xPYdbnfdTkbzH96XYb7nSupN3CD5Ri6jpYzEQzSh_RMCGb4XtsLBXrYfksj-8cayCTegdje3fNVcirPVh37JGtc7BWSKkVExFEQ19Xmck",
  //   "https://lh3.googleusercontent.com/bJbd0YtkEII5oNX6MwJirSbdSFGpPRDXzlPRCDZfM7lpXrXbefEMIofNyKmpGNIBQZCp_feHiO6IL6ikL3Y0En9Z6XMPj7PR7hInRm4l8XHXz3ocZd6si93Ni_ywFyCRLR738RFsSNE",
  //   "https://lh3.googleusercontent.com/fIq2_XuWjkXySC81zASOKZf1Jwvfb54AIaoAps7mrRns17_gfmruxavOrTU12sAbQrMcugbjixwYH7H5qaEJJq-dkqjW5FWnlxzU3KuFJwxdBLxLgscf79HksdKQP8waeS89fMR5yk4",
  //   "https://lh3.googleusercontent.com/6GK5hmpEBbmdKtTcpDd2fEMUy93dknIs1G7j_hHGcaFGlbZH-xU5xxj5V-iJ8qSUh5QWU6YFZUiwqWAoSzUjczzrcc_Vj0QrjcBjIJQNtqQzGIcBCvTNaOcIWVPkIbr71XiwRq09RPU",
  //   "https://lh3.googleusercontent.com/eWgoMHlAWTYu4tz94OXKs7XCd45T5bkn_inpZETfubDD9l-fbENkTYfNjjh40LIJ596dvY89LLyo681w3Cwlj1qUF9knsXqNMW7zhpQBPjeln4OpVPqE8OTojDxs8-WXhOR2d9w5W9k",
  //   "https://lh3.googleusercontent.com/Wzaxm_M7S1jB8vxiKmjljmge2MbaqD1CLUYEz2wu6RhsMZAF23mxPubKYoqIu50mlZIafM-W4WJGmWy1Q_AHDUXj7aoRmoJrlHELIjL5rDifpexYKfV-3cHb_CHtQOC0ttTeBuDsq4I",
  //   "https://lh3.googleusercontent.com/xFRETVJjhDL_0JYis6VQq7upD82xhSyrN1_8Dy0Sw1xNZMYlnF2oL1mAkvAhKn5UAguuqwoLLueIX0ToGmI7brcHPXv0DIKZHTw5wHbOoXmy7CQ0AaSKnCQISOj36s_xTpmnSONBlvQ",
  //   "https://lh3.googleusercontent.com/8EqVZDpQaZG4EClqPeQe3A3O1Lg3ZoIypTUIH2QT_1xHNg6_gcqMrc3CZ7f2drH_qDcX8hFAepN9ohzyIw_WQixPUiNUw1i2jawamwFyVpGC41o9KqvssVru100AGomU6kVA8446xH0",
  //   "https://lh3.googleusercontent.com/-3UQ0NpqgUs7JQ5ji2fuUqh928Y2wepXsQgGS9fAgqgNvQWTmBticQGYOxvxolMu_8OS4HFwzZM77ah99LGaETwtBgj4PQ93hwUuUfJu2zfvJJXgxya3kBL7DNRN_YwUweU3NhoGgpQ",
  //   "https://lh3.googleusercontent.com/OEUtRebFglgnlKT2d7XFRzhAta-Uhq82l_c51bv-U23Fu87owUfcm4m2TB3eKZ5aMlq7HK_RbLqGOASpXpi6A1EeVkx2vnvDArsqDHx4BPOQbXpAG_3ph7rCJCc1oZPa2fta4g36Zn0",
  //   "https://lh3.googleusercontent.com/88uEuSNcm6FrWwzy-gSOlNHn5aQtbduEpXGNcph9Secput3n0U71aRhYXoegZ67diS7_lV28HhrYXPEfu0LiNt0oyjbRxpe7CgiQ1HcQtFFyLCnb3mnhdwaWBlwVZuH7N4gyUtqqnns",
  //   "https://lh3.googleusercontent.com/HDCIBCJYlxoVbQDBL1wTkrJFGnm9SNSk_bRFhjy2bfqZ-GJ1if3pW8fLDCjjhNTx3o0sWlmviQyiFDKUEGv1KYgXeYvJSjK_smtXr421IeUyHbRv2YF3UKqQJkcArguvvbQ382IwIb8",
  //   "https://lh3.googleusercontent.com/NVae-y-hsEMmcF8wz7bdxVfzcmBPADmJfCh6jYtYquO78oyzLUMUY_idgXT8oF7qGzEjl04sJSu54gtKG-PDqKqG19vQRfj3OQB_UzoTLwjXIi0cC_kAekX6XJhdOaDI9BMmQHz5xDw",
  //   "https://lh3.googleusercontent.com/zgtRb9Nz_BMSJzPI0w_H9nQGrznz5kQ6WrymfJ878TclUv5VJFUgeDWBdMApW6jZIXp_l3xuuFQoJP2Z8jdycMvZ1zCGmE-kYeA25WE1BpZzWccGZtbv2avI095wcJEuArbGbZO5VD0",
  //   "https://lh3.googleusercontent.com/dvd64f0E0pVyaviRxxEOy1KCQJ4r73ycozvhcq7jRLcOSh-YRESqvydJaW5R9vHVizmSAxbKmbyRI2YVHYPnraHugi5MxsU9LCbJTdQVxBb5Ik_CnM_7OFzUdso7EYtPxpAHuQfWboM",
  //   "https://lh3.googleusercontent.com/6uG7thpgTUhnsXcbokmg6FMjVzjVGMPgXmk0tfzt8BE9e8dedPytz7O80Nq7njX3IDY4feNlZfd2b8z3FyfVu_FgpRJhC7Xq2I2chldx4R0D-JlWvah3J4ImKg8B9UIZp0erJnSODFI",
  //   "https://lh3.googleusercontent.com/vv-2vcd3QufFkqZBTf1twov_rHpH_Nx-e12ofAap5_Ud9m745KDyce61WYYz5tMDiZJoPt1DjCq4ifByVEHMbJTW_fj_rgNXboBlFMjNmGZexNrMPpcZgTu9BaciLAiBDjlPv1ucukU",
  //   "https://lh3.googleusercontent.com/acZrDtY9N-HQrFzt3mgEIv3GW4UrOxMZcpeN0o4nflEZ7H4QRDhHwfG6S-jPk4OJoC17ijri7tm2BhX40p5alibG0w4H65V4BwIjXTouLImSiMAcqKf_xpfmduuhxr7Xcz0G201kMwQ",
  //   "https://lh3.googleusercontent.com/GeA1FKZWi9n1GFJEWl5D4ITtVIlnlD0z_Cgo2LK7nzc2u8vXCcxAmfWYwsyL8elP3scwr0DhNnxRDBEEM7ow0oKMAzsdScOiU-dEtwg2tsKqp1rTzdTL9Wy6DS8ArG16Dv_4ORkPUBU",
  //   "https://lh3.googleusercontent.com/99td_TdTplcaDtJ_Y1HwWhgY_w7-i05zzM_6FpwX-a3sRXA58A2dWSAnGgHu7qaaqkAJYs2y20mxVHN1yspvAyavB_s-QV2B9mTZk4fgbcR29XD2GUBugaaol8CztYVujlNYgr_kfAc",
  //   "https://lh3.googleusercontent.com/753kof7tqu4hSWfmDzPxcIQJkZ0l7b9ZHUQ83r2rBkWT6JWhMGOpj46STFS5IFDSTMYPliy-sL2tZhd6e_q6Ov8ZfzcSpqn_71AoDQqd9DqnH7NnkTRH6cC8aIS5b5aOoX8-I_XT4_w",
  //   "https://lh3.googleusercontent.com/jjWYxJRgEgjWe_TOScza4ll4spgYK-3bd6w-aWUBJxV08NZqikRLY1M3KLVYcRCvo0hUdD_GT1cMToj1-aK1_At3ofdlId67Eo-xR7J9xJ1obiO_QUzhB0kwb8K3fX6Dvq_D04e6ETM",
  //   "https://lh3.googleusercontent.com/NK56KI8TC01ML_Y27rSh2nxX7xC_wlg-ZXwtGzQRJwJPMbs6X2GvRTzS9Vrmi1S8PAzxWEV1Jo-4UbSWn8EJ3E7Ka572vKPokX3mc1KVwPSjR42wO2aDk94nXssWQ1gJwa9Yx15lkW4",
  //   "https://lh3.googleusercontent.com/JocPkefAVhGr9MGcLFGsAJbX8EuNRwUM4AjTCHqZYPQm6SzOi0dcJ7sV1V61ATiANmEa2_ndmr-MOKzJtggqlzbYSAh3Yp8RqUw_QztYuzzJXOY93OE2O05lDw6MorZJ2GhXSBhOo0M",
  //   "https://lh3.googleusercontent.com/xwo8dAoesw3WmMDhLi5NBFxfPqc7XLNCMD_Zypzh7KEPpwDY6eUaOsUF8OzNOkex-BG3_jNGjnFGMKSmzwBQKNxydtceAWXao4FuSaRHdJdxfglXu4ccNBWVuPCzjtOq47TmUm0kWsw",
  //   "https://lh3.googleusercontent.com/LHSTr1gkxosS2ZK902-bcZNeg1QOFN35graakqXwJY5h3gqjpbwUcWYr2S2Jw20IJs6H3lvpjalek0nvE45OiW_1D1RcOGE37oiyXVh3rwPQDCmQKBW8WhYY4kCGm_bKj8I_I9OOklM",
  // ]

  const response = [
    "_0 (6).JPG",
    "DSC_0211.JPG",
    "DSC_0292.JPG",
    "IMG_2271.jpg",
    "IMG_2279.jpg",
    "IMG_0354.JPG",
    "FullSizeRender.jpg",
    "IMG-4238.jpg",
    "IMG-4242.jpg",
    "IMG-4249.jpg",
    "IMG-4255.jpg",
    "IMG_0123.JPG",
    "IMG_0219.jpg",
    "IMG_0241.jpg",
    "IMG_0282.JPG",
    "IMG_0299.JPG",
    "IMG_0391.JPG",
    "IMG_0509.JPG",
    "IMG_0513.JPG",
    "IMG_0555.HEIC.png",
    "IMG_0556.HEIC.png",
    "IMG_0584.JPG",
    "IMG_0757.JPG",
    "IMG_0763.JPG",
    "IMG_0765.JPG",
    "IMG_0768.PNG",
    "IMG_0768.jpg",
    "IMG_0769.JPG",
    "IMG_0774.JPG",
    "IMG_0779.JPG",
    "IMG_0889.JPG",
    "IMG_0893.JPG",
    "IMG_1112.jpg",
    "IMG_1135.JPG",
    "IMG_1223.JPG",
    "IMG_1233.JPG",
    "IMG_1255.JPG",
    "IMG_1300.JPG",
    "IMG_1432.jpg",
    "IMG_1439.jpg",
    "IMG_1603.jpg",
    "IMG_1668.jpg",
    "IMG_1688.jpg",
    "IMG_1884.JPG",
    "IMG_1914.JPG",
    "IMG_1931.JPG",
    "IMG_1935.JPG",
    "IMG_2041.jpg",
    "IMG_2206.JPG",
    "IMG_2296.jpeg",
    "IMG_2311.jpeg",
    "IMG_2515.JPG",
    "IMG_2665.JPG",
    "IMG_2690.JPG",
    "IMG_2869.HEIC.png",
    "IMG_3083.jpg",
    "IMG_3107.jpg",
    "IMG_3215.JPG",
    "IMG_3278.JPG",
    "IMG_3279.JPG",
    "IMG_3564.JPG",
    "IMG_4212.jpeg",
    "IMG_4213.jpeg",
    "IMG_4215.jpeg",
    "IMG_4232.jpg",
    "IMG_4722.JPG",
    "IMG_4813.JPG",
    "IMG_5452.jpg",
    "IMG_5983.jpg",
    "Partner TAM1.jpg",
    "Partner TAM2.jpg",
    "Snapseed-1.jpg",
    "Snapseed-2.jpg",
    "Snapseed.jpg",
    "SysOps Cert SME2.jpg",
    "awsbuilders.jpg",
    "brisket.jpg",
    "brisket775.jpg",
    "sparring 3tvs1-1.png",
    "sparring 3tvs1-2.png",
    "29497290_10156251179530948_3405242585587908608_o.jpg",
    "4f3a84c8-3d15-4d9f-8818-d6bd6a66dc3e.jpg",
    "68638214_10157523681240948_4553230624470597632_n.jpg",
    "68756341_10157523681195948_1357199177225863168_n.jpg",
    "68813082_10157523681215948_6210054691724722176_n.jpg",
    "69056436_10157523681225948_4252389910805217280_n.jpg",
  ]

  const images = response.map(url => ({
    // // Google Photos Trick
    // original: `${url}=w1024`,
    // thumbnail: `${url}=w100`,
    original: `${url}`,
    thumbnail: `${url}`,
  }))

  return (
    <Layout>
      <SEO
        title="Gallery"
        keywords={[
          `sigit`,
          `priyanggoro`,
          `sigit priyanggoro`,
          `aws`,
          `severless`,
          `amplify`,
          `appsync`,
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `reactjs`,
        ]}
      />
      <h2>Gallery</h2>
      <ImageGallery items={images} />
    </Layout>
  )
}
export default Gallery
