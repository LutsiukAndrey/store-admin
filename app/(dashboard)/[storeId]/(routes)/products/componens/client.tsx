"use client";

import { useParams, useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";

import AddIcon from "@mui/icons-material/Add";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <Heading
          title={`Products (${data.length})`}
          description="Menege products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <AddIcon className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="API calls for Products" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};

export default ProductClient;
