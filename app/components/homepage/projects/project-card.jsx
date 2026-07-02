// @flow strict

import * as React from 'react';

function ProjectCard({ project }) {

  return (
    <div className="from-white border-slate-200 relative rounded-lg border bg-gradient-to-r to-slate-50 shadow-sm w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-violet-600 font-semibold text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-slate-200 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base text-slate-800">
          <div className="blink">
            <span className="mr-2 text-blue-600">const</span>
            <span className="mr-2 text-slate-800">project</span>
            <span className="mr-2 text-blue-600">=</span>
            <span className="text-slate-500">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-800">name:</span>
            <span className="text-slate-500">{`'`}</span>
            <span className="text-emerald-600">{project.name}</span>
            <span className="text-slate-500">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-800">tools:</span>
            <span className="text-slate-500">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-emerald-600">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-slate-500">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-slate-500">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-800">myRole:</span>
            <span className="text-emerald-600">'{project.role}'</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-800">Description:</span>
            <span className="text-emerald-600">{' ' + project.description}</span>
            <span className="text-slate-500">,</span>
          </div>
          <div><span className="text-slate-500">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;