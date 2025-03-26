"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <FormField
          {...form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="John Doe" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          {...form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <Input placeholder="Your password" type="password" {...field} />
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Sign In</Button>
      </form>
    </Form>
  );
}
