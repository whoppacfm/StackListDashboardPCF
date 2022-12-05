/* eslint-disable */

//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultPalette, IStackStyles, IStackTokens } from '@fluentui/react';
import { Stack } from '@fluentui/react/lib/Stack';

//Custom css
//import './stackitemslist.css';


const StackItemsList : React.FunctionComponent = (props:any) => {

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
