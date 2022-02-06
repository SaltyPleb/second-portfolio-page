import React from "react";

const Graph = () => {
  return (
    <div className="stats">
      <div className="graph_wrapper">
        <div className="set-size charts-container">
          <div className="pie-wrapper progress-72">
            <div className="pie">
              <div className="left-side half-circle"></div>
              <div className="right-side half-circle"></div>
            </div>
            <div className="ci-shadow"></div>
          </div>
        </div>
        <div className="set-size-2 charts-container">
          <div className="pie-wrapper progress-30">
            <div className="pie">
              <div className="left-side half-circle"></div>
              <div className="right-side half-circle"></div>
            </div>
            <div className="ci-shadow"></div>
          </div>
        </div>
        <div className="set-size-3 charts-container">
          <div className="pie-wrapper progress-60">
            <div className="pie">
              <div className="left-side half-circle"></div>
              <div className="right-side half-circle"></div>
            </div>
            <div className="ci-shadow"></div>
          </div>
        </div>
      </div>
      <div className="stats_wrap">
        <div className="line">
          <div className="line_wrap">
            <div className="color blue"></div>
            <div className="item">All tasks</div>
          </div>
          <div className="percentage">72 %</div>
        </div>
        <div className="line">
          <div className="line_wrap">
            <div className="color orange"></div>
            <div className="item">Documents</div>
          </div>
          <div className="percentage">30 %</div>
        </div>
        <div className="line">
          <div className="line_wrap">
            <div className="color l-blue"></div>
            <div className="item">Meetings</div>
          </div>
          <div className="percentage">60 %</div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
