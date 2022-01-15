import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { FooterComponent } from './footer/footer.component';
import { ImgLoaderComponent } from './img-loader/img-loader.component';
import { FeaturesBoxComponent } from './features-box/features-box.component';
import { HeaderComponent } from './header/header.component';
import { ImageScreenComponent } from './image-screen/image-screen.component';
import { MoreProjectsComponent } from './more-projects/more-projects.component';
import { ThanksReadingComponent } from './thanks-reading/thanks-reading.component';
import { TitleProjectsComponent } from './title-projects/title-projects.component';
import { TypographyLettersComponent } from './typographyLetters/typography-letters.component';

import { StranslateDirective } from './directives/stranslate.directive';

/* Material UI components */
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    ImgLoaderComponent,
    ColorPaletteComponent,
    ColorPaletteComponent,
    FeaturesBoxComponent,
    FooterComponent,
    HeaderComponent,
    ImageScreenComponent,
    MoreProjectsComponent,
    ThanksReadingComponent,
    TitleProjectsComponent,
    TypographyLettersComponent,
    StranslateDirective,
    CopyrightComponent,
  ],
  exports: [
    FooterComponent,
    ImgLoaderComponent,
    ColorPaletteComponent,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatIconModule,
    MatTabsModule,
    ColorPaletteComponent,
    FeaturesBoxComponent,
    FooterComponent,
    HeaderComponent,
    ImageScreenComponent,
    MoreProjectsComponent,
    ThanksReadingComponent,
    TitleProjectsComponent,
    TypographyLettersComponent,
    StranslateDirective,
    FormsModule,
    ReactiveFormsModule,
    CopyrightComponent,
  ],
})
export class ComponentsModule {}
