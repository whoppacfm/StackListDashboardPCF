/* eslint-disable */

//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//Document Card
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    IDocumentCardPreviewProps,
  } from '@fluentui/react/lib/DocumentCard';

import { ImageFit } from '@fluentui/react/lib/Image';
import { TestImages } from '@fluentui/example-data';

import { DefaultPalette, IStackStyles, IStackTokens } from '@fluentui/react';

//FocusZone
import { createArray } from '@fluentui/react/lib/Utilities';
import { FocusZone, FocusZoneDirection } from '@fluentui/react-focus';
import { DefaultButton } from '@fluentui/react/lib/Button';

//Stack
import { Stack } from '@fluentui/react/lib/Stack';

//Custom css
//import './stackitemslist.css';

//Theme
import { loadTheme, createTheme, Theme, IButtonStyles } from '@fluentui/react';


//----------------------------
//Testing/System/DataSource
//----------------------------
var DATA_SOURCE = "CRM"
let href = window!.top!.location.href;
if(href.indexOf("127.") > -1 || href.indexOf("localhost") > -1) {
    DATA_SOURCE="TEST";
}
var CRM_TEST_MODE = 0;


//Load Theme
const appTheme: Theme = createTheme({
  palette: {
    themePrimary: 'grey',
    themeSecondary: 'green'
  }
});

const myTheme_buttonStyles: IButtonStyles = {
  root: {
    backgroundColor: 'yellow'
  }
};

const myTheme = createTheme({
  defaultFontStyle: { fontFamily: 'Monaco, Menlo, Consolas', fontWeight: 'regular' },
  fonts: {
    small: {
      fontSize: '11px'
    },
    medium: {
      fontSize: '13px'
    },
    large: {
      fontSize: '20px',
      fontWeight: 'semibold'
    },
    xLarge: {
      fontSize: '22px',
      fontWeight: 'semibold'
    }
  },
  components: { PrimaryButton: { styles: myTheme_buttonStyles } },
  palette: {
    themePrimary: '#15b053',
    themeLighterAlt: '#010703',
    themeLighter: '#031c0d',
    themeLight: '#063519',
    themeTertiary: '#0d6a32',
    themeSecondary: '#139b49',
    themeDarkAlt: '#26b860',
    themeDark: '#41c375',
    themeDarker: '#6bd394',
    neutralLighterAlt: '#0d0c0c',
    neutralLighter: '#171616',
    neutralLight: '#272424',
    neutralQuaternaryAlt: '#312e2e',
    neutralQuaternary: '#393535',
    neutralTertiaryAlt: '#5b5656',
    neutralTertiary: '#b0e19e',
    neutralSecondary: '#6dc34e',
    neutralSecondaryAlt: '#6dc34e',
    neutralPrimaryAlt: '#3ba714',
    neutralPrimary: '#299c00',
    neutralDark: '#207600',
    black: '#175700',
    white: '#030202',
  }});

//Load Theme with global scope
loadTheme(myTheme);

//Load scheme in local scope in jsx:
//<ThemeProvider theme={XYTheme}>
//  <XYControl />
//</ThemeProvider>




//-------------
//Document Card
//-------------
const StackItemsList : React.FunctionComponent = (props:any) => {
    
      const previewProps: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
          {
            name: '2016 Conference Presentation',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'New Contoso Collaboration for Conference Presentation Draft',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Spec Sheet for design',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Contoso Marketing Presentation',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'Notes from Ignite conference',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewTwo,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'FY17 Cost Projections',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreviewThree,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
      };

      const previewPropsTest: IDocumentCardPreviewProps = {
        getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
        previewImages: [
          {
            name: 'IDocumentCardPreviewProps',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
          {
            name: 'IDocumentCardPreviewProps 2',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: "./wordIcon.png",//"https://png.pngtree.com/element_our/md/20180627/md_5b33460fe6357.jpg",
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },          
        ],
      };          

      const onActionClick = (action: string, ev: React.SyntheticEvent<HTMLElement>): void => {
        console.log(`You clicked the ${action} action`);
        ev.stopPropagation();
        ev.preventDefault();
        alert(`You clicked the ${action} action`);
      };
      
      const documentCardActions = [
        {
          iconProps: { iconName: 'Share' },
          onClick: onActionClick.bind(this, 'share'),
          ariaLabel: 'share action',
        },
        {
          iconProps: { iconName: 'Pin' },
          onClick: onActionClick.bind(this, 'pin'),
          ariaLabel: 'pin action',
        },
        {
          iconProps: { iconName: 'Ringer' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
      ];

      const documentCardActionsTest = [
        {
          iconProps: { iconName: 'AccessLogo' },
          onClick: onActionClick.bind(this, 'share'),
          ariaLabel: 'share action',
        },
        {
          iconProps: { iconName: 'AccountActivity' },
          onClick: onActionClick.bind(this, 'pin'),
          ariaLabel: 'pin action',
        },
        {
          iconProps: { iconName: 'AADLogo' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
        {
          iconProps: { iconName: 'AutoRacing' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
        {
          iconProps: { iconName: 'ArrangeSendToBack' },
          onClick: onActionClick.bind(this, 'notifications'),
          ariaLabel: 'notifications action',
        },
      ];

      const tokens = { childrenGap: 10, padding: 10 };
      const topStackListStyle:any={overflow:"auto", scrollbarWidth:'thin', height:"1000px",width:"100vw", border:"0px solid grey", padding:"10px"};
      const outerStackListStyle:any={backgroundColor:DefaultPalette.themeTertiary, overflow:"hidden", scrollbarWidth:"thin", height:"150px",width:"100vw", border:"0px solid black", float:"left"};
      const innerStackListStyle:any={backgroundColor:DefaultPalette.themePrimary, overflowX:"auto", overflowY:"hidden", scrollbarWidth:"thin", height:"130px",width:"100%", border:"0px solid black", float:"left"};
      const stackTitleStyle:any={width:"80px"};
      
      const itemStyle:any={width:"200px", minWidth:"200px", height:"100%", verticalAlign:"middle", textAlign:"center", backgroundColor:"darkturquoise", padding:"5px"};
      const itemTopLeftStyle:any={float:"left", fontSize:"small"};
      const itemTopRightStyle:any={float:"right", fontSize:"small"};
      const itemMiddleStyle:any={width:"100%", backgroundColor:"antiquewhite"};
      const itemMiddleStyle2:any={width:"100%", backgroundColor:"aqua"};
      const itemBottomLeftStyle:any={float:"left", fontSize:"small", display:"contents"};
      const itemBottomRightStyle:any={float:"right", fontSize:"small"};

    return (
        <>
            <Stack tokens={tokens} verticalFill horizontalAlign="center" style={topStackListStyle}>

                <Stack tokens={tokens} horizontal verticalAlign="center" style={outerStackListStyle}>
                    <div style={stackTitleStyle}><strong>My open cases</strong></div>
                    <Stack tokens={tokens} horizontal verticalAlign="center" style={innerStackListStyle}>

                        <div style={itemStyle}>
                            <div style={itemTopLeftStyle}>43564343</div><div style={itemTopRightStyle}>CASE</div>
                            <br/>
                            <div style={itemMiddleStyle}>Case Text</div>
                            <div style={itemMiddleStyle2}>IN PROGRESS</div>
                            <br/>
                            <div style={itemBottomLeftStyle}>05-02-2022</div><div style={itemBottomRightStyle}>||||</div>
                        </div>

                        <div style={itemStyle}>Item 2</div>
                        <div style={itemStyle}>Item 3</div>
                        <div style={itemStyle}>Item 4</div>
                        <div style={itemStyle}>Item 5</div>

                    </Stack>
                </Stack>
                
                <Stack tokens={tokens} horizontal verticalAlign="center" style={outerStackListStyle}>
                    <div style={stackTitleStyle}><strong>All open cases</strong></div>
                    <Stack tokens={tokens} horizontal verticalAlign="center" style={innerStackListStyle}>

                    </Stack>
                </Stack>

                <Stack tokens={tokens} horizontal verticalAlign="center" style={outerStackListStyle}>
                    <div style={stackTitleStyle}><strong>Open Tasks</strong></div>
                    <Stack tokens={tokens} horizontal verticalAlign="center" style={innerStackListStyle}>

                        <div style={itemStyle}>Item 1</div>
                        <div style={itemStyle}>Item 2</div>
                        <div style={itemStyle}>Item 3</div>
                        <div style={itemStyle}>Item 4</div>
                        <div style={itemStyle}>Item 5</div>
                        <div style={itemStyle}>Item 6</div>
                        <div style={itemStyle}>Item 7</div>
                        <div style={itemStyle}>Item 8</div>
                        <div style={itemStyle}>Item 9</div>
                        <div style={itemStyle}>Item 10</div>
                        <div style={itemStyle}>Item 11</div>
                        <div style={itemStyle}>Item 12</div>

                    </Stack>
                </Stack>

                <Stack tokens={tokens} horizontal verticalAlign="center" style={outerStackListStyle}>
                    <div style={stackTitleStyle}><strong>New EMails</strong></div>
                    <Stack tokens={tokens} horizontal verticalAlign="center" style={innerStackListStyle}>

                        <div style={itemStyle}>Item 1</div>
                        <div style={itemStyle}>Item 2</div>

                    </Stack>
                </Stack>

            </Stack>

        </>
    );
}

export function Render(container:any) {
  
    /* ReactDOM.render is deprecated, but FluentUI does not support new React version until now
    const root = createRoot(container);
    root.render(<div><SearchSelectControl context={context} theobj={theobj} /></div>);
    */
   
    ReactDOM.render(
      <>
        <div><StackItemsList /></div>
      </>
      , container
    );
  
  }