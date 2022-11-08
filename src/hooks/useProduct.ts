import { useQuery } from "react-query";
import { IProduct, ProductService } from "../services";

export const useProduct = (id: string | undefined) => {
	const { isLoading, data: product } = useQuery(["product list", id], () => ProductService.getById(String(id)), {
		onError: (error: any) => {
			alert(error.message);
		},
		select: ({ data }): IProduct => data,
		enabled: !!id,
	});

	return { isLoading, product };
};