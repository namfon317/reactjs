import React from 'react';
class Covid extends React.Component {
    render() {
        let data = this.props.data;
        data.toLocaleString(undefined, { maximumFractionDigits: 2 })
        return (

            <>
                {/* <div>{data.Confirmed}</div>
                <div>{data.NewConfirmed}</div>
                <div>{data.Recovered}</div>
                <div>{data.NewRecovered}</div>
                <div>{data.Hospitalized}</div>
                <div>{data.UpdateDate}</div> */}
                <div class="row">
                <div class="col-sm-12">
                        <div >
                            <h2>รายงานสถานการณ์ โควิด-19</h2>
                            <h4  >อัพเดทข้อมูลล่าสุด :{data.UpdateDate}</h4>
                            
                        </div>
                    </div>
                    <div class="col-sm-12">
                        <div class="card-default">
                            <p>ติดเชื้อสะสม</p>
                            <h1  >{data.Confirmed}</h1>
                            <span>
                                (+ {data.NewConfirmed})</span>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="card-default2">
                            <p>หายแล้ว</p>
                            <h1>{data.Recovered}</h1>
                            <span>
                                (+ {data.NewRecovered})</span>
                        </div>
                    </div>

                    <div class="col-sm-4" >
                        <div class="card-default3">
                            <p>รักษาอยู่ใน รพ.</p>
                            <h1>{data.Hospitalized}</h1>
                            <span>&nbsp;</span>
                        </div>
                    </div>
                    <div class="col-sm-4" >
                        <div class="card-default4">
                            <p>เสียชีวิต</p>
                            <h1>{data.Deaths}</h1>
                            <span>&nbsp;</span>
                        </div>
                    </div>
                </div>



            </>
        )
    }
}
export default Covid;
