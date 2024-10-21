import { Suspense, Fragment } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CopyToClipboardButton } from "@/components/copy-to-clipboard-button";
import {
  display1,
  display2,
  display3,
  headline1,
  headline2,
  subhead,
  body1,
  body2,
  caption,
  small,
  callout,
} from "@/brand/typography";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (
    <main
      className={cn(
        "col-span-1 mt-44",
        "xs:col-span-2",
        "sm:col-span-3",
        "md:col-span-6",
        "lg:col-start-3 lg:col-span-8",
        "xl:col-start-3 xl:col-span-10",
        "flex flex-col gap-12",
      )}
    >
      <h1 className="headline-1">Typography</h1>
      <div>
        <h2 className="headline-2">Titles</h2>
        <div
          className={cn(
            "grid grid-cols-1 gap-4",
            "xs:grid-cols-2",
            "sm:grid-cols-3",
            "md:grid-cols-6",
            "lg:grid-cols-8",
            "xl:grid-cols-10",
          )}
        >
          {Object.entries({
            display1,
            display2,
            display3,
            headline1,
            headline2,
            subhead,
          }).map(([key, value]) => (
            <Fragment key={key}>
              <div
                className={cn(
                  "flex justify-start items-end h-24 col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-6 lg:items-center lg:col-span-3 xl:col-span-3",
                  value.className,
                )}
              >
                {value.name}
              </div>
              <div
                className={cn(
                  "flex justify-start items-center col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-5",
                )}
              >
                {value.description}
              </div>
              <div className="flex justify-end items-center">{value.className}</div>
              <div className="flex justify-start items-center">
                <Suspense fallback={null}>
                  <CopyToClipboardButton
                    className=""
                    text={value.className}
                    iconProps={{ size: 16 }}
                  />
                </Suspense>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div>
        <h2 className="headline-2">Content</h2>
        <div
          className={cn(
            "grid grid-cols-1 gap-4",
            "xs:grid-cols-2",
            "sm:grid-cols-3",
            "md:grid-cols-6",
            "lg:grid-cols-8",
            "xl:grid-cols-10",
          )}
        >
          {Object.entries({
            body1,
            body2,
            caption,
            small,
          }).map(([key, value]) => (
            <Fragment key={key}>
              <div
                className={cn(
                  "col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-6 lg:col-span-3 xl:col-span-3",
                  value.className,
                )}
              >
                {value.name}
              </div>
              <div
                className={cn(
                  "col-span-1 xs:col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-5",
                )}
              >
                {value.description}
              </div>
              <div>{value.className}</div>
              <div>
                <Suspense fallback={null}>
                  <CopyToClipboardButton
                    text={value.className}
                    iconProps={{ size: 16 }}
                  />
                </Suspense>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="flex min-h-screen flex-col items-center justify-between gap-8 p-24">
        <Card className="w-full">
          <CardHeader>
            <h1 className="headline-1">Content</h1>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of all content styles.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-48">Preview</TableHead>
                  <TableHead>description</TableHead>
                  <TableHead className="text-right">class</TableHead>
                  <TableHead className="w-16">options</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries({
                  body1,
                  body2,
                  caption,
                  small,
                }).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className={value.className}>
                      {value.name}
                    </TableCell>
                    <TableCell>{value.description}</TableCell>
                    <TableCell className="text-right">
                      {value.className}
                    </TableCell>
                    <TableCell>
                      <Suspense fallback={null}>
                        <CopyToClipboardButton
                          text={value.className}
                          iconProps={{ size: 16 }}
                        />
                      </Suspense>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <h1 className="headline-1">Action</h1>
          </CardHeader>
          <CardContent>
            <Table>
              <TableCaption>A list of all action styles.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-48">Preview</TableHead>
                  <TableHead>description</TableHead>
                  <TableHead className="text-right">class</TableHead>
                  <TableHead className="w-16">options</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Object.entries({
                  callout,
                }).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className={value.className}>
                      {value.name}
                    </TableCell>
                    <TableCell>{value.description}</TableCell>
                    <TableCell className="text-right">
                      {value.className}
                    </TableCell>
                    <TableCell>
                      <Suspense fallback={null}>
                        <CopyToClipboardButton
                          text={value.className}
                          iconProps={{ size: 16 }}
                        />
                      </Suspense>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        {/*<span className="display-1 display-2 display-3 headline-1 headline-2 subhead body-1 body-2 caption small callout" />*/}
      </div>
    </main>
  );
}
