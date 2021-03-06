import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { PublishPage } from '../pages/publish/publish';
import { SavewenjiPage } from '../pages/savewenji/savewenji';
import { TabsPage } from '../pages/tabs/tabs';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ChangepasswordemailPage } from '../pages/changepasswordemail/changepasswordemail';
import { ChangepasswordmobilePage } from '../pages/changepasswordmobile/changepasswordmobile';
import { ChangepasswordnewPage } from '../pages/changepasswordnew/changepasswordnew';
import { ChangepasswordselectPage } from '../pages/changepasswordselect/changepasswordselect';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SignupmobilePage } from '../pages/signupmobile/signupmobile';
import { MyPage } from '../pages/my/my';
import { ShezhiPage } from '../pages/shezhi/shezhi';
import { WePage } from '../pages/we/we';
import { FunPage } from '../pages/fun/fun';
import { HelpPage } from '../pages/help/help';
import { AdvicePage } from '../pages/advice/advice';
import { ProblemPage } from '../pages/problem/problem';
import { NumPage } from '../pages/num/num';
import {FanPage } from '../pages/fan/fan';
import {GuanzhuPage } from '../pages/guanzhu/guanzhu';
import {UserPage } from '../pages/user/user';
import {HeadPage } from '../pages/head/head';
import {SignPage } from '../pages/sign/sign';
import {CollectPage } from '../pages/collect/collect';
import {WenjiPage } from '../pages/wenji/wenji';
import {NewPage } from '../pages/new/new';
import{YuanchuangPage}from'../pages/yuanchuang/yuanchuang';
import{TuwenPage} from'../pages/tuwen/tuwen';
import{MusicPage} from'../pages/music/music';
import { AllPage } from '../pages/all/all';
import { TongxinPage } from '../pages/tongxin/tongxin';
import { DreamPage } from '../pages/dream/dream';
import { LovePage } from '../pages/love/love';
import { SearchPage } from '../pages/search/search';
import { DetailPage } from '../pages/detail/detail';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera} from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { PwordsPage } from '../pages/pwords/pwords';
import { PphotoPage } from '../pages/pphoto/pphoto';
import { PmusicPage } from '../pages/pmusic/pmusic';
import { CommentPage } from '../pages/comment/comment';
import { RespondPage} from '../pages/respond/respond';
import { MyAnthologyPage } from '../pages/my-anthology/my-anthology';
import { MyCollectionPage } from '../pages/my-collection/my-collection';
import { CollectiondetailPage } from '../pages/collectiondetail/collectiondetail';
import { ReplydetailPage } from '../pages/replydetail/replydetail';
import { AboutlyricsPage } from '../pages/aboutlyrics/aboutlyrics';
import { AboutnarrationPage } from '../pages/aboutnarration/aboutnarration';
import { AboutsceneryPage } from '../pages/aboutscenery/aboutscenery';
import { AboutstorytellingPage } from '../pages/aboutstorytelling/aboutstorytelling';
import { AboutappearancePage } from '../pages/aboutappearance/aboutappearance';
import { AthologyPage } from '../pages/athology/athology';
import { OtheruserPage } from '../pages/otheruser/otheruser';
import { OthersdataPage } from '../pages/othersdata/othersdata';
import { OtherathologyPage } from '../pages/otherathology/otherathology';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PublishPage,
    PwordsPage,
    PphotoPage,
    PmusicPage,
    SavewenjiPage,
    TabsPage,
    MyPage,
    ShezhiPage,
    WePage,
    FunPage,
    HelpPage,
    AdvicePage,
    ProblemPage,
    NumPage,
    FanPage,
    GuanzhuPage,
    UserPage,
    HeadPage,
    SignPage,
    CollectPage,
    CollectiondetailPage,
    WenjiPage,
    NewPage,
    ChangepasswordPage,
    ChangepasswordnewPage,
    ChangepasswordemailPage,
    ChangepasswordmobilePage,
    ChangepasswordselectPage,
    LoginPage,
    SignupPage,
    SignupmobilePage,
    YuanchuangPage,
    TuwenPage,
    MusicPage,
    AllPage,
    TongxinPage,
    DreamPage,
    LovePage,
    SearchPage,
    DetailPage,
    CommentPage,
    RespondPage,
    ReplydetailPage,
    MyAnthologyPage,
    MyCollectionPage,
    AboutlyricsPage,
    AboutnarrationPage,
    AboutsceneryPage,
    AboutstorytellingPage,
    AboutappearancePage,
    AthologyPage,
    OtheruserPage,
    OthersdataPage,
    OtherathologyPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:'',
      tabsHideOnSubPages:true,
      // pageTransition:'md-transition',
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    PublishPage,
    PwordsPage,
    PphotoPage,
    PmusicPage,
    SavewenjiPage,
    TabsPage,
    MyPage,
    ShezhiPage,
    WePage,
    FunPage,
    HelpPage,
    AdvicePage,
    ProblemPage,
    NumPage,
    FanPage,
    GuanzhuPage,
    UserPage,
    HeadPage,
    SignPage,
    CollectPage,
    CollectiondetailPage,
    WenjiPage,
    NewPage,
    ChangepasswordPage,
    ChangepasswordnewPage,
    ChangepasswordemailPage,
    ChangepasswordmobilePage,
    ChangepasswordselectPage,
    LoginPage,
    SignupPage,
    SignupmobilePage,
    YuanchuangPage,
    TuwenPage,
    MusicPage,
    AllPage,
    TongxinPage,
    DreamPage,
    LovePage,
    SearchPage,
    DetailPage,
    CommentPage,
    RespondPage,
    ReplydetailPage,
    MyAnthologyPage,
    MyCollectionPage,
    AboutlyricsPage,
    AboutnarrationPage,
    AboutsceneryPage,
    AboutstorytellingPage,
    AboutappearancePage,
    AthologyPage,
    OtheruserPage,
    OthersdataPage,
    OtherathologyPage,
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
//提交home页面和消息和发现页面