import { Title } from "../components/partials/Title";
import Layout from "../layouts/Layout";
import { BadgeCheck } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/Tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Pages() {
  //get the global props

  return (
    <Layout>
      <Title
        title={"Auth Pages"}
        description="We have two auth pages, login and register"
        Icon={BadgeCheck}
        iconColor={"text-teal-500"}
        bgColor={"bg-teal-500/10"}
      />
      <div className="px-4 lg:px-8">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Login</TabsTrigger>
            <TabsTrigger value="password">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Login Page</CardTitle>
                <CardDescription>
                  Click the button to go to the login page
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Link to={"/login"}>
                  <Button>View Page</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Click the button below to go to the register page
                </CardDescription>
              </CardHeader>

              <CardFooter>
                <Link to={"/register"}>
                  {" "}
                  <Button>View Page</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
