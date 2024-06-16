import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NavbarPlusComponent } from './navbar-plus/navbar-plus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SportGeorgiaComponent } from './sport-georgia/sport-georgia.component';
import { KvaraComponent } from './kvara/kvara.component';
import { NakrebiComponent } from './nakrebi/nakrebi.component';
import { HomeComponent } from './home/home.component';
import { SidebarModule } from 'primeng/sidebar';


import { TagModule } from 'primeng/tag';
import { HttpClientModule } from '@angular/common/http';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { UserComponent } from './user/user.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SearchComponent } from './search/search.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { NewsComponent } from './news/news.component';
import { AsideComponent } from './aside/aside.component';
import { ListsComponent } from './lists/lists.component';
import { register } from 'swiper/element/bundle';
import { SlideVideoComponent } from './slide-video/slide-video.component';
import { AuthorsSlideComponent } from './authors-slide/authors-slide.component';
import { ForumComponent } from './forum/forum.component';
import { AllCardComponent } from './all-card/all-card.component';





register();
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarPlusComponent,
    SideMenuComponent,
    SportGeorgiaComponent,
    KvaraComponent,
    NakrebiComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    NewsComponent,
    AsideComponent,
    ListsComponent,
    SlideVideoComponent,
    AuthorsSlideComponent,
    ForumComponent,
    AllCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzIconModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    TagModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    NzAutocompleteModule,
    NzFormModule,
    NzAvatarModule,
    CommonModule,
    NzInputModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzMenuModule,
    NzSwitchModule,
    ScrollPanelModule,
    SearchComponent,
    CommonModule,
    NzCardModule,
    MenuModule,



  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],

  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
