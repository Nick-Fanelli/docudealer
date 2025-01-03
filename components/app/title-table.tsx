"use client";

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
} from "@nextui-org/table";

import { Pagination } from "@nextui-org/pagination";
import { Button } from "@nextui-org/button";
import { Dropdown, DropdownTrigger, DropdownItem, DropdownMenu } from "@nextui-org/dropdown";

import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { ChevronDownIcon, PlusIcon, SearchIcon } from "../icons";
import { SharedSelection } from "@nextui-org/react";

const columns = [
    { name: "VIN", uid: "vin", sortable: true },
    { name: "STATE", uid: "state", sortable: true },
    { name: "TITLED TO", uid: "titledTo", sortable: true },
];

const statusOptions = [
    { name: "Verified", uid: "verified" },
    { name: "At DMV", uid: "atDmv" },
    { name: "Sold", uid: "sold" },
];

type Title = {

    vin: string
    state: string
    titledTo: string

}

const titles: Title[] = [

    {
        vin: "1HD4LE213KC418175",
        state: "New Jersey",
        titledTo: "Nick's Custom Inc."
    },

    {
        vin: "1HD4LE213KC418176",
        state: "New Jersey",
        titledTo: "Nick's Custom Inc."
    },

    {
        vin: "1HD4LE213KC418177",
        state: "New Jersey",
        titledTo: "Nick's Custom Inc."
    },


];

const INITIAL_VISIBLE_COLUMNS = ["vin", "state", "titledTo"];
const PAGINATION_INTERVALS = [15, 25, 50];

const capitalizeFirstLetter = (s: string) => { return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : ""; }

const TitleTable = () => {

    const [isMounted, setIsMounted] = useState<boolean>(false);

    const [filterValue, setFilterValue] = useState<string>("");
    const [selectedKeys, setSelectedKeys] = useState<Set<string> | string>(new Set([])); // TODO: MAYBE ADJUST TYPE
    const [visibleColumns, setVisibleColumns] = useState<Set<string> | string>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = useState<string | string[]>("all");
    const [rowsPerPage, setRowsPerPage] = useState<number>(PAGINATION_INTERVALS[0]);
    const [sortDescriptor, setSortDescriptor] = useState<{ column: keyof Title, direction: "ascending" | "descending" }>({ column: "vin", direction: "ascending" });
    const [page, setPage] = useState<number>(1);

    const pages = Math.ceil(titles.length / rowsPerPage);
    const hasSearchFilter = Boolean(filterValue);

    useLayoutEffect(() => {
        setIsMounted(true);
    }, []);

    const headerColumns = useMemo(() => {

        if (visibleColumns === "all")
            return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));

    }, [visibleColumns]);

    const filteredItems = useMemo(() => {

        let filteredTitles = [...titles];

        if (hasSearchFilter) {
            filteredTitles = filteredTitles.filter((title) => {
                title.vin.toUpperCase().includes(filterValue.toUpperCase()); // TODO: ADD MORE FILTERS
            });
        }

        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredTitles = filteredTitles.filter((title) => {
                Array.from(statusFilter).includes(title.state);
            });
        }

        return filteredTitles;

    }, [titles, filterValue, statusFilter]);

    const items = useMemo(() => {

        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);

    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = useMemo(() => {

        return [...items].sort((a, b) => {
            const first = a[sortDescriptor.column];
            const second = b[sortDescriptor.column];
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        })

    }, [sortDescriptor, items]);

    const renderCell = useCallback((title: Title, columnKey: keyof Title) => {

        const cellValue = title[columnKey];

        switch (columnKey) {
            case 'vin':
                return (
                    <>
                        <p className="text-base capitalize">{cellValue}</p>
                        <p className="text-small text-default-400">2001 HD FXSTD</p>
                    </>
                );
        }

        return (
            <p className="text-small">{cellValue}</p>
        )

    }, []);

    const onRowsPerPageChange = useCallback((e: any) => { // FIXME
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const topContent = useMemo(() => {
        return (

            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Titles</h1>
                <div className="flex gap-2">
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={(keys: SharedSelection) => { // FIXME
                                    setStatusFilter(keys.toString());
                                    console.log(keys.toString());
                                }}
                            >
                                {
                                    statusOptions.map((status) => (
                                        <DropdownItem key={status.uid} className="capitalize">
                                            {capitalizeFirstLetter(status.name)}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button
                                    endContent={<ChevronDownIcon className="text-small" />}
                                    size="sm"
                                    variant="flat"
                                >
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={(keys: SharedSelection) => { // FIXME
                                    setVisibleColumns(keys.toString());
                                    console.log(keys.toString());
                                }}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {capitalizeFirstLetter(column.name)}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button className="bg-foreground text-background" endContent={<PlusIcon />} size="sm">
                            Add New
                        </Button>
                    </div>
                </div>
            </div>
        )
    }, [
        filterValue,
        statusFilter,
        visibleColumns,
        onSearchChange,
        onRowsPerPageChange,
        titles.length,
        hasSearchFilter
    ]);

    const bottomContent = useMemo(() => {
        return (
            <div className="grid grid-cols-3">
                <div className="flex justify-start items-center text-default-400 text-small">
                    <p>{titles.length} Total Titles</p>
                </div>
                <div className="flex justify-center items-center">
                    <Pagination
                        showControls
                        classNames={{
                            cursor: "bg-foreground text-background"
                        }}
                        color="default"
                        isDisabled={hasSearchFilter}
                        page={page}
                        total={pages}
                        variant="light"
                        onChange={setPage}
                    >
                        <span className="text-small text-default-400">
                            {
                                typeof selectedKeys === 'string' && selectedKeys === "all"
                                    ? "All items selected"
                                    : `${(selectedKeys as Set<string>).size} of ${items.length} selected`
                            }
                        </span>
                    </Pagination>
                </div>
                <div className="flex justify-end items-center">
                    <div className="flex items-center">
                        <label className="flex items-center text-default-400 text-small">
                            <p>Titles Per Page:</p>
                            <select
                                className="bg-transparent outline-none text-default-400 text-small"
                                onChange={onRowsPerPageChange}
                            >
                                {
                                    PAGINATION_INTERVALS.map((interval) => (
                                        <option value={interval} key={interval}>{interval}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </div>
                </div>
            </div>
        )
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    if (!isMounted) { // TODO: Display Skeleton
        return null;
    }

    return (
        <Table
            isHeaderSticky
            aria-label="Table of Titles"
            selectedKeys={selectedKeys}
            selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            onSelectionChange={() => { }} // FIXME
            onSortChange={() => { }} // FIXME
        >
            <TableHeader columns={headerColumns}>
                {(column) => (
                    <TableColumn
                        key={column.uid}
                        align={column.uid === "actions" ? "center" : "start"}
                        allowsSorting={column.sortable}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody emptyContent={ // TODO: MAKE WORK
                <div className="flex flex-col items-center justify-center gap-5">
                    <p>No titles found...</p>
                    <Button className="bg-foreground-600 text-background" endContent={<PlusIcon />} size="sm">Add New Title</Button>
                </div>
            } items={sortedItems}>
                {(item) => (
                    <TableRow key={item.vin}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey as keyof Title)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>

        </Table>
    )

}

export default TitleTable;