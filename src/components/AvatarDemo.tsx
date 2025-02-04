import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <Avatar className="w-[52px] h-[50px] cursor-pointer">
      <AvatarImage
        src="https://scontent.fuln2-2.fna.fbcdn.net/v/t39.30808-6/313432411_1573326069785175_7923010293005871362_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tEpKxuW06EUQ7kNvgFI624_&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&_nc_gid=APbcg0ED8e0Nnr4LYjndXzS&oh=00_AYB_iuClEc7ZTPYkQxxT-tDtAIegp5SUsfoL3FdK0w51_w&oe=67A7F367"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
