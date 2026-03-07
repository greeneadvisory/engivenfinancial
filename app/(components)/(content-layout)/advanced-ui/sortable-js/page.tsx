"use client"
import { Drag, Drag1, Drag10, Drag11, Drag2, Drag3, Drag4, Drag5, Drag6, Drag7, Drag8, Drag9 } from "@/shared/data/adavanec-ui/sortablejsdata";
import Pageheader from "@/shared/layouts-components/page-header/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { FC, Fragment } from "react";
import { ReactSortable } from "react-sortablejs";


interface SortableJsProps {}

const SortableJs : FC<SortableJsProps>  = () => {
    
    const [list, setList] = React.useState(Drag);
    const [list1, setList1] = React.useState(Drag1);
    const [list2, setList2] = React.useState(Drag2);
    const [list3, setList3] = React.useState(Drag3);
    const [list4, setList4] = React.useState(Drag4);
    const [list5, setList5] = React.useState(Drag5);
    const [list6, setList6] = React.useState(Drag6);
    const [list7, setList7] = React.useState(Drag7);
    const [list8, setList8] = React.useState(Drag8);
    const [list9, setList9] = React.useState(Drag9);
    const [list10, setList10] = React.useState(Drag10);
    const [list11, setList11] = React.useState(Drag11);

    type ListItem = {
        id: number;
        text: string;
    };

    const [sortlist, setsortList] = React.useState<ListItem[]>([
        { id: 1, text: "Analyze market trends." },
        { id: 2, text: "Edit video content." },
        { id: 3, text: "Plan social media calendar." },
        { id: 4, text: "Update company policies." },
        { id: 5, text: "Compile sales reports." },
        { id: 6, text: "Schedule client calls." },
    ]);

return (
<Fragment>
        {/* <!-- Page Header --> */}
        <Seo title={"Sortable JS"} />

        <Pageheader title="Advanced Ui" currentpage="Sortable JS" activepage="Sortable JS" />

        {/* <!-- Page Header Close --> */}
        {/* <!-- Start::row-1 --> */}
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    SIMPLE LIST
                                </div>
                            </div>
                            <div className="box-body">
                                <ol className="ti-list-group !p-0 !border-0 sortable-list list-group-numbered" id="simple-list">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={list} setList={setList} group="shared" animation={200} easing="ease-out">
                                    {list.map(item => (
                                        <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                    ))}
                                </ReactSortable>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-8 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">SHARED LISTS</div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 sm:gap-x-6">
                                    <div className="xl:col-span-6 col-span-12">
                                        <ol className="ti-list-group !p-0 !border-0 sortable-list list-group-numbered" id="shared-left">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={list1} group={'shared'} setList={setList1} animation={200} easing="ease-out">
                                            {list1.map(item => (
                                                <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                            ))}
                                        </ReactSortable>
                                        </ol>
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <ol className="ti-list-group !p-0 !border-0 sortable-list list-group-numbered" id="shared-right">
                                            <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={list2} group={'shared'} setList={setList2} animation={200} easing="ease-out">
                                                {list2.map(item => (
                                                    <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                                ))}
                                            </ReactSortable>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--End::row-1 --> */}

              {/* <!-- Start:: row-2 --> */}
              <div className="grid grid-cols-12 gap-x-6">
                  <div className="xl:col-span-6 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  CLONING
                              </div>
                          </div>
                          <div className="box-body">
                              <div className="grid grid-cols-12 sm:gap-x-6">
                                  <div className="xl:col-span-6 col-span-12">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="cloning-left">
                                      <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" group={{     name: 'shared',     pull: 'clone' }} list={list8} setList={setList8} direction={'horizontal'} animation={200} easing="ease-out">
                                            {list8.map(item => (
                                                <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                            ))}
                                        </ReactSortable>
                                      </ul>
                                  </div>
                                  <div className="xl:col-span-6 col-span-12">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="cloning-right">
                                        <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" group={{     name: 'shared',     pull: 'clone' }} list={list9} setList={setList9} direction={'horizontal'} animation={150} swapThreshold={1} easing="ease-out">
                                                {list9.map(item => (
                                                    <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                                ))}
                                        </ReactSortable>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="xl:col-span-6 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  DISABLING SORTING
                              </div>
                          </div>
                          <div className="box-body">
                              <div className="grid grid-cols-12 sm:gap-x-6">
                                  <div className="xl:col-span-6 col-span-12">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="disabling-sorting-left">
                                            {list10.map((item: any) => (
                                               <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                            ))}
                                      </ul>
                                  </div>
                                  <div className="xl:col-span-6 col-span-12">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="disabling-sorting-right">
                                       
                                            {list3.map(item => (
                                                  <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                            ))}
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End:: row-2 --> */}

              {/* <!-- Start:: row-3 --> */}
              <div className="grid grid-cols-12 gap-x-6">
                  <div className="xl:col-span-6 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  SORTING WITH HANDLE
                              </div>
                          </div>
                          <div className="box-body">
                              <ol className="ti-list-group !p-0 !border-0 sortable-list list-item-numbered" id="sorting-with-handle">
                              <ReactSortable list={sortlist} setList={setsortList} handle=".handle"  animation={150}  className="list-group sortable-list list-item-numbered" tag="ol">
                                {sortlist.map((item) => (
                                    <li key={item.id} className="ti-list-group-item" data-id={item.id}>
                                        <i className="ri-drag-move-2-fill me-2 text-dark text-[1rem] handle leading-none"></i>
                                        {item.text}
                                    </li>
                                ))}
                            </ReactSortable>
                              </ol>
                          </div>
                      </div>
                  </div>
                  <div className="xl:col-span-6 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  SORTING WITH FILTER
                              </div>
                          </div>
                          <div className="box-body">
                              <ul className="ti-list-group !p-0 !border-0 sortable-list" id="sorting-with-filter">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={list4} setList={setList4} animation={200} easing="ease-out">
                                        {list4.map(item => (
                                            <li className={`ti-list-group-item ${item.filter}`} key={item.id}>{item.name}</li>
                                        ))}
                                </ReactSortable>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End:: row-3 --> */}

              {/* <!-- Start:: row-4 --> */}
              <div className="grid grid-cols-12 gap-x-6">
                  <div className="xl:col-span-12 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  SORTABLE GRID
                              </div>
                          </div>
                          <div className="box-body" id="sortable-grid">
                                <ReactSortable filter=".addImageButtonContainer" dragClass="sortableDrag" list={list7} setList={setList7} animation={200} easing="ease-out">
                                        {list7.map(item => (
                                            <div className="grid-square" key={item.id}>
                                                <span className="font-medium">{item.name}</span>
                                            </div>
                                        ))}
                                </ReactSortable>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End:: row-4 --> */}

              {/* <!-- Start:: row-5 --> */}
              <div className="grid grid-cols-12 gap-x-6">
                  <div className="xl:col-span-6 col-span-12">
                      <div className="box">
                          <div className="box-header">
                              <div className="box-title">
                                  NESTED SORTABLE
                              </div>
                          </div>
                          <div className="box-body">
                              <div id="nestedSortables" className="ti-list-group !p-0 !border-0 col nested-sortable">
                              <ReactSortable
                                    filter=".addImageButtonContainer"
                                    dragClass="sortableDrag"
                                    list={list11}
                                    group={'nested'}
                                    fallbackOnBody={true}
                                    setList={setList11}
                                    animation={200}
                                    easing="ease-out"
                                >
                                    {list11.map(item => (
                                        <div
                                            key={item.id}
                                            className={`ti-list-group-item rounded-tl-md rounded-tr-md ${item.children ? 'nested-1' : ''}`}
                                            draggable={item.draggable === false ? 'false' : 'true'}
                                        >
                                            {item.name}
                                            {item.children && (
                                                <div className="list-group nested-sortable">
                                                    {item.children.map(child => (
                                                        <div
                                                            key={child.id}
                                                            className={`ti-list-group-item rounded-bl-md rounded-br-md ${child.children ? 'nested-2' : ''} ${child.class}`}
                                                            draggable={child.draggable === false ? 'false' : 'true'}
                                                        >
                                                            {child.name}
                                                            {child.children && (
                                                                <div className="list-group nested-sortable">
                                                                    {child.children.map(grandchild => (
                                                                        <div
                                                                            key={grandchild.id}
                                                                            className="ti-list-group-item nested-3"
                                                                            draggable={grandchild.draggable === false ? 'false' : 'true'}
                                                                        >
                                                                            {grandchild.name}
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </ReactSortable>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="xl:col-span-6 col-span-12">
                      <div className="grid grid-cols-12 gap-x-6">
                          <div className="xl:col-span-12 col-span-12">
                              <div className="box">
                                  <div className="box-header">
                                      <div className="box-title">
                                          MULTIPLE DRAG
                                      </div>
                                  </div>
                                  <div className="box-body">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="multiple-drag">
                                        <ReactSortable filter=".addImageButtonContainer" multiDrag={true} fallbackTolerance={3} dragClass="sortableDrag" list={list5} setList={setList5} animation={200} easing="ease-out">
                                            {list5.map(item => (
                                                <li className="ti-list-group-item" key={item.id}>{item.name}.</li>
                                            ))}
                                        </ReactSortable>
                                    </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="xl:col-span-12 col-span-12">
                              <div className="box">
                                  <div className="box-header">
                                      <div className="box-title">
                                          SWAP
                                      </div>
                                  </div>
                                  <div className="box-body">
                                      <ul className="ti-list-group !p-0 !border-0 sortable-list" id="sortable-swap">
                                    <ReactSortable multiDrag filter=".addImageButtonContainer" dragClass="sortableDrag" list={list6} swap={true} setList={setList6} animation={200} easing="ease-out">
                                        {list6.map(item => (
                                            <li className="ti-list-group-item" key={item.id}>{item.name}</li>
                                        ))}
                                    </ReactSortable>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* <!-- End:: row-5 --> */}
</Fragment>
);
};

export default SortableJs;